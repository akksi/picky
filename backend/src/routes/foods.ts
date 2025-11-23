import { Router } from 'express';
import { body } from 'express-validator';
import { getFoods, getFoodById, createFood, updateFood, deleteFood } from '../controllers/foodsController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All routes require authentication
router.use(authenticateToken);

// Validation
const foodValidation = [
  body('name').trim().notEmpty().withMessage('Food name is required'),
  body('brand').trim().notEmpty().withMessage('Brand is required'),
  body('type').trim().notEmpty().withMessage('Type is required'),
];

// Routes
router.get('/', getFoods);
router.get('/:id', getFoodById);
router.post('/', foodValidation, createFood);
router.put('/:id', foodValidation, updateFood);
router.delete('/:id', deleteFood);

export default router;

