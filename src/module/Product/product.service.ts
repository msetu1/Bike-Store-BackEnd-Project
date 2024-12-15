import { IProduct } from './product.interface';
import { Product } from './product.model';

const createBike = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};
const allBikes = async () => {
  const result = await Product.find();
  return result;
};
const singleBike = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};
const updateBike = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const deleteBike = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductService = {
  createBike,
  allBikes,
  singleBike,
  updateBike,
  deleteBike,
};
