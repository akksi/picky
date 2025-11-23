import { Router } from 'express';
import { body } from 'express-validator';
import { getCats, getCatById, createCat, updateCat, deleteCat } from '../controllers/catsController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All routes require authentication
router.use(authenticateToken);

// Validation
const catValidation = [
  body('name').trim().notEmpty().withMessage('Cat name is required'),
  body('breed').optional().trim(),
  body('age').optional().isInt({ min: 0 }).withMessage('Age must be a positive number'),
  body('imageUrl').optional().trim(),
];

// Routes
router.get('/', getCats);
router.get('/:id', getCatById);
router.post('/', catValidation, createCat);
router.put('/:id', catValidation, updateCat);
router.delete('/:id', deleteCat);

export default router;

