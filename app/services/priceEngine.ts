import { rates } from '../constants';
import { Rate } from '../types';

const DIM_DIVISOR: number = 139;

const calculateDimentionalWeight = (length: number, width: number, height: number): number => {
  return (
    (length * width * height) / DIM_DIVISOR
  );
}

type Parcel = {
  zip: number;
  length: number;
  width: number;
  height: number;
  weight: number;
};

const rateOrder = ({ length, width, height, weight, zip }: Parcel): Rate | void => {
  const dimWeight = calculateDimentionalWeight(
    length,
    width,
    height
  );

  const maxWeight = Math.ceil(
    Math.max(weight, dimWeight)
  );

  const rate = rates.find(rate => {
    return rate.zip === zip && rate.price <= maxWeight
  });

  return rate;
}

export {
  rateOrder,
  calculateDimentionalWeight
}
