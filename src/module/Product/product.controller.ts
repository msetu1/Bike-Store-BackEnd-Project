import { catchAsync } from '../Utils/catchAsync';
import { ProductService } from './product.service';

const createBike = catchAsync(async (req, res) => {
  const result = await ProductService.createBike(req.body);

  res.status(200).json({
    success: true,
    message: 'Bike created successfully',
    data: result,
  });
});
const allBikes = catchAsync(async (req, res) => {
  const result = await ProductService.allBikes();

  res.status(200).json({
    success: true,
    message: 'All Bike retrieved successfully',
    data: result,
  });
});
const singleBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.singleBike(id);

  res.status(200).json({
    success: true,
    message: 'Single Bike retrieved successfully',
    data: result,
  });
});
const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await ProductService.updateBike(id, body);

  res.status(200).json({
    success: true,
    message: 'Bike updated successfully',
    data: result,
  });
});
const deleteBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  await ProductService.deleteBike(id);

  res.status(200).json({
    success: true,
    message: 'Bike deleted successfully',
    data: {},
  });
});

export const ProductController = {
  createBike,
  allBikes,
  singleBike,
  updateBike,
  deleteBike,
};
