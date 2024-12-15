import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { ProductRoute } from './module/Product/product.route';
import { globalErrorHandling } from './module/Utils/globalErrorHanlder';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/products', ProductRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running');
});

app.use(globalErrorHandling);
export default app;
