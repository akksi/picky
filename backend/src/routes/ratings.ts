import { Router } from 'express';
import { body } from 'express-validator';
import {
  getRatings,
  getRatingsByCat,
  createOrUpdateRating,
  deleteRating,
  getFoodStats,
} from '../controllers/ratingsController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All routes require authentication
router.use(authenticateToken);

// Validation
const ratingValidation = [
  body('catId').isInt().withMessage('Valid cat ID is required'),
  body('foodId').isInt().withMessage('Valid food ID is required'),
  body('liked').isBoolean().withMessage('Liked must be true or false'),
  body('notes').optional().trim(),
];

// Routes
router.get('/', getRatings);
router.get('/cat/:catId', getRatingsByCat);
router.get('/stats', getFoodStats);
router.post('/', ratingValidation, createOrUpdateRating);
router.delete('/:id', deleteRating);

export default router;

