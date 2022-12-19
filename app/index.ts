import express, { Express, Request, Response } from 'express';
import rateRouter from './api/v1/orders/rate';

const app: Express = express();

app.get('/api/v1/orders', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', rateRouter);

export default app;
