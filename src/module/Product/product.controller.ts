import { catchAsync } from "../Utils/catchAsync";
import { ProductService } from "./product.service";

const createBike=catchAsync(async(req,res)=>{
    const result =await ProductService.createBike(req.body);

    res.status(200).json({
        success: true,
        message: 'Bike created successfully',
        data: result,
      });
});

export const ProductController={
    createBike
}