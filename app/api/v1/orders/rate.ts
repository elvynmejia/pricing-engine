import { Router, Request, Response, NextFunction } from 'express';
import { Parcel } from '../../../types';
import { rateOrder } from '../../../services/priceEngine';

const router: Router = Router();

router.post('/orders/rate', (req: Request, res: Response, next: NextFunction) => {
  let parcel: Parcel = req.body.parcel;

  const {
    length,
    width,
    height,
    weight,
    zip
  } = parcel;

  const rate = rateOrder({
    length,
    width,
    height,
    weight,
    zip
  });

  if (rate) {
    return res.status(200).json(rate);
  } else {
    return res.status(422).json({
      errors: [{
        message: `Unable to find shipping coverage for given parcel. Make sure the weight and dimentional weight does not surpase agreed weight limit of ${800} oz`,
        field: 'Check fields: weight, height, length or width for possible errors'
      }],
      message: 'Unprocessable Entity',
    });
  }
});

export default router;
