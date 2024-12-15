import { IProduct } from './product.interface';
import { Product } from './product.model';

const createBike = async (data: IProduct) => {
  const result = await Product.create(data);
  return result;
};

export const  ProductService={
    createBike
}
