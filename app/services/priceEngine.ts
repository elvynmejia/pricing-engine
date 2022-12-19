import { rates } from '../constants';
import { Rate, Parcel } from '../types';

const DIM_DIVISOR: number = 139;

const calculateDimentionalWeight = (length: number, width: number, height: number): number => {
  return (
    (length * width * height) / DIM_DIVISOR
  );
};

const rateOrder = (parcel: Parcel): Rate | void => {
  const { length, width, height, weight, zip } = parcel;
  const dimWeight = calculateDimentionalWeight(
    length,
    width,
    height
  );

  // if the weight is not in oz unit we should normalize it first
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
