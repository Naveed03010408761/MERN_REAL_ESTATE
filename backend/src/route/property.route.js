import express from 'express';
import { 
  createProperty, 
  getAllProperties, 
  getPropertyById, 
  updateProperty, 
  deleteProperty 
} from '../controller/property.controller.js';
import { verifyJWT } from '../middleware/auth.middleware.js';
import { restrictTo } from '../middleware/restrictTo.js';

const router = express.Router();

// Public Routes
router.get('/', getAllProperties); // anyone can access
router.get('/:id', getPropertyById); // anyone can access

// Seller-only routes
router.post('/', verifyJWT, restrictTo('seller'), createProperty);
router.put('/:id', verifyJWT, restrictTo('seller'), updateProperty);
router.delete('/:id', verifyJWT, restrictTo('seller'), deleteProperty);

export default router;
