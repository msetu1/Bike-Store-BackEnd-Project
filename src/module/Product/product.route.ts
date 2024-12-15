import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-bike', ProductController.createBike);
router.get('/:id', ProductController.singleBike);
router.put('/:id', ProductController.updateBike);
router.delete('/:id', ProductController.deleteBike);
router.get('/', ProductController.allBikes);

export const ProductRoute = router;
