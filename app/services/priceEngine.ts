import {
  rates,
  MAX_ALLOWED_WEIGHT
} from '../constants';

import { Rate, Parcel, DimensionalWeight } from '../types/internal';

const DIM_DIVISOR: number = 139;

const calculateDimentionalWeight = (dimensions: DimensionalWeight): number => {
  const { length, width, height } = dimensions;

  return Math.ceil(
    (length * width * height) / DIM_DIVISOR
  );
};

const rateOrder = (parcel: Parcel): Rate | void => {
  const { length, width, height, weight, zip } = parcel;

  const dimWeight = calculateDimentionalWeight({
    length,
    width,
    height
  });

  // if the weight is not in oz unit we should normalize it first
  const billableWeight = Math.max(weight, dimWeight)

  const elegibility: Rate[] = rates.filter(rate => {
    return rate.zip === zip && billableWeight <= MAX_ALLOWED_WEIGHT
  });

  const cheapest: Rate[] = elegibility.sort((a,b) => {
    return a.price - b.price;
  });

  return cheapest[0];
}

export {
  rateOrder,
  calculateDimentionalWeight
}
