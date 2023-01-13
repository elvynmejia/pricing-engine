import { Router, Request, Response } from 'express';
import { Parcel, Rate } from '../../../types/internal';
import { MAX_ALLOWED_WEIGHT } from '../../../constants';

import { ratePresenter } from '../../../presenters/rate';

import {
  rateOrder,
  calculateDimentionalWeight
} from '../../../services/priceEngine';

const router: Router = Router();

const isWeightValid = (parcel: Parcel): boolean => {
  const { length, width, height } = parcel;
  const dimWeight: number = calculateDimentionalWeight({
    length,
    width,
    height
  });

  if (parcel.weight > MAX_ALLOWED_WEIGHT || dimWeight > MAX_ALLOWED_WEIGHT) {
    return false;
  }

  return true;
};

router.post('/rate', (req: Request, res: Response) => {
  const parcel: Parcel = req.body.parcel;

  if (!isWeightValid(parcel)) {
    return res.status(422).json({
      errors: [{
        message: `Parcel's weight or dimentional weight is greater than the weight limit of ${MAX_ALLOWED_WEIGHT} oz`,
        field: 'weight, height, length or width'
      }],
      message: 'Unprocessable Entity',
    });
  }

  const rate: Rate | void = rateOrder(parcel);

  if (rate) {
    return res.status(200).json({
      ...ratePresenter(rate)
    });
  } else {
    return res.status(422).json({
      errors: [{
        message: `Unable to find shipping coverage for zip ${parcel.zip}`,
        field: 'zip'
      }],
      message: 'Unprocessable Entity',
    });
  }
});

export default router;
