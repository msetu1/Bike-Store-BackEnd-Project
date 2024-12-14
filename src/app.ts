import express, { Application } from 'express';
import cors from 'cors';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application route

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
