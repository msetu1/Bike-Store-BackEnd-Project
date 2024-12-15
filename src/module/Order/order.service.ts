import { IOrder } from './order.interface';
import { Order } from './order.model';

const createOrder = async (data: IOrder) => {
  const result = await Order.create(data);
  return result;
};

export const OrderService = {
  createOrder,
};
