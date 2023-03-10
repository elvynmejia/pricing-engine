import express, { Express } from 'express';
import rateRouter from './api/v1/orders/rate';
import morgan from 'morgan';

const app: Express = express();

app.use(express.json());
app.use(morgan('common'));
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/orders', rateRouter);

export default app;
