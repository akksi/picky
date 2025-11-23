import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import pool from '../config/database';

export const getRatings = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      'SELECT * FROM ratings WHERE user_id = $1 ORDER BY created_at DESC',
      [req.userId]
    );
    res.json({ ratings: result.rows });
  } catch (error) {
    console.error('Get ratings error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRatingsByCat = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { catId } = req.params;
    const result = await pool.query(
      'SELECT * FROM ratings WHERE cat_id = $1 AND user_id = $2',
      [catId, req.userId]
    );
    res.json({ ratings: result.rows });
  } catch (error) {
    console.error('Get ratings by cat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createOrUpdateRating = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { catId, foodId, liked, notes } = req.body;

    // Check if rating exists
    const existingRating = await pool.query(
      'SELECT * FROM ratings WHERE cat_id = $1 AND food_id = $2 AND user_id = $3',
      [catId, foodId, req.userId]
    );

    let result;
    if (existingRating.rows.length > 0) {
      // Update existing rating
      result = await pool.query(
        'UPDATE ratings SET liked = $1, notes = $2, updated_at = CURRENT_TIMESTAMP WHERE cat_id = $3 AND food_id = $4 AND user_id = $5 RETURNING *',
        [liked, notes, catId, foodId, req.userId]
      );
    } else {
      // Create new rating
      result = await pool.query(
        'INSERT INTO ratings (user_id, cat_id, food_id, liked, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [req.userId, catId, foodId, liked, notes]
      );
    }

    res.status(existingRating.rows.length > 0 ? 200 : 201).json({ rating: result.rows[0] });
  } catch (error) {
    console.error('Create/update rating error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteRating = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM ratings WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Rating not found' });
      return;
    }

    res.json({ message: 'Rating deleted successfully' });
  } catch (error) {
    console.error('Delete rating error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFoodStats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      `SELECT 
        f.id,
        f.name,
        f.brand,
        f.type,
        COUNT(r.id) as total_ratings,
        COUNT(CASE WHEN r.liked = true THEN 1 END) as likes,
        COUNT(CASE WHEN r.liked = false THEN 1 END) as dislikes
      FROM foods f
      LEFT JOIN ratings r ON f.id = r.food_id
      WHERE f.user_id = $1
      GROUP BY f.id, f.name, f.brand, f.type
      ORDER BY total_ratings DESC, likes DESC`,
      [req.userId]
    );

    res.json({ stats: result.rows });
  } catch (error) {
    console.error('Get food stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

