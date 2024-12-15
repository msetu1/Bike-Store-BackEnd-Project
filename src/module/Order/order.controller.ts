import { Product } from '../Product/product.model';
import { catchAsync } from '../Utils/catchAsync';
import { Order } from './order.model';
import { OrderService } from './order.service';

const createOrder = catchAsync(async (req, res) => {
  const { email, product, quantity, totalPrice } = req.body;

  const existingProduct = await Product.findById(product);

  if (!existingProduct) {
    throw new Error('Order not found');
  }

  if (existingProduct.quantity < quantity) {
    throw new Error('insufficient stock');
  }

  const newOrder = { email, product, quantity, totalPrice };
  const orders = await OrderService.createOrder(newOrder);

  existingProduct.quantity -= quantity;

  if (existingProduct.quantity === 0) {
    existingProduct.inStock = false;
  }
  await existingProduct.save();

  res.status(200).json({
    success: true,
    message: 'Order created successfully',
    data: orders,
  });
});

const calculateRevenue = catchAsync(async (req, res) => {
  const revenue = await Order.aggregate([
    {
      $group: {
        _id: null,
        amount: { $sum: '$totalPrice' },
      },
    },
    { $project: { amount: 1 } },
  ]);

  res.status(200).json({
    success: true,
    message: 'Revenue calculated successfully',
    data: { totalRevenue: revenue[0].amount },
  });
});

export const OrderController = {
  createOrder,
  calculateRevenue,
};
