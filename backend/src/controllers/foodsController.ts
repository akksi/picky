import { Response } from 'express';
import { AuthRequest } from '../middleware/auth';
import pool from '../config/database';

export const getFoods = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const result = await pool.query(
      'SELECT * FROM foods WHERE user_id = $1 ORDER BY created_at DESC',
      [req.userId]
    );
    res.json({ foods: result.rows });
  } catch (error) {
    console.error('Get foods error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getFoodById = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const result = await pool.query(
      'SELECT * FROM foods WHERE id = $1 AND user_id = $2',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Food not found' });
      return;
    }

    res.json({ food: result.rows[0] });
  } catch (error) {
    console.error('Get food error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createFood = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { name, brand, type } = req.body;

    const result = await pool.query(
      'INSERT INTO foods (user_id, name, brand, type) VALUES ($1, $2, $3, $4) RETURNING *',
      [req.userId, name, brand, type]
    );

    res.status(201).json({ food: result.rows[0] });
  } catch (error) {
    console.error('Create food error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateFood = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, brand, type } = req.body;

    const result = await pool.query(
      'UPDATE foods SET name = $1, brand = $2, type = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 AND user_id = $5 RETURNING *',
      [name, brand, type, id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Food not found' });
      return;
    }

    res.json({ food: result.rows[0] });
  } catch (error) {
    console.error('Update food error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteFood = async (req: AuthRequest, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      'DELETE FROM foods WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'Food not found' });
      return;
    }

    res.json({ message: 'Food deleted successfully' });
  } catch (error) {
    console.error('Delete food error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

