import express from 'express';
import { ProductController } from './product.controller';

const router =express.Router();

router.post('/create-bike',ProductController.createBike);


export const ProductRoute=router;