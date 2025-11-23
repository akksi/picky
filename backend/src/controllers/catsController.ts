import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import pool from '../config/database';

export const getCats = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      'SELECT * FROM cats WHERE user_id = $1 ORDER BY created_at DESC',
      [req.userId]
    );
    res.json({ cats: result.rows });
  } catch (error) {
    console.error('Get cats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCatById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM cats WHERE id = $1 AND user_id = $2',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Cat not found' });
      return;
    }

    res.json({ cat: result.rows[0] });
  } catch (error) {
    console.error('Get cat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createCat = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, breed, age, imageUrl } = req.body;

    const result = await pool.query(
      'INSERT INTO cats (user_id, name, breed, age, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [req.userId, name, breed, age, imageUrl]
    );

    res.status(201).json({ cat: result.rows[0] });
  } catch (error) {
    console.error('Create cat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateCat = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, breed, age, imageUrl } = req.body;

    const result = await pool.query(
      'UPDATE cats SET name = $1, breed = $2, age = $3, image_url = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 AND user_id = $6 RETURNING *',
      [name, breed, age, imageUrl, id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Cat not found' });
      return;
    }

    res.json({ cat: result.rows[0] });
  } catch (error) {
    console.error('Update cat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteCat = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM cats WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Cat not found' });
      return;
    }

    res.json({ message: 'Cat deleted successfully' });
  } catch (error) {
    console.error('Delete cat error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

