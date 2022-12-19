import { Router, Request, Response } from 'express';
import { Parcel, Rate } from '../../../types';
import { rateOrder } from '../../../services/priceEngine';

const router: Router = Router();

router.post('/rate', (req: Request, res: Response) => {
  const parcel: Parcel = req.body.parcel;

  const rate: Rate | void = rateOrder(parcel);

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
