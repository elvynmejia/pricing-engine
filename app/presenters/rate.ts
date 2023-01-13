type Rate = {
  price: number;
  zip: number;
  // max_weight: number;
  carrier: string;
  unit: string;
  region: string;
};

// should take an internal rate of type import { Rate } from '../../../types';
export const ratePresenter = (rate: any): Rate => {
  return {
    price: rate.price,
    zip: rate.zip,
    // max_weight: number;
    carrier: rate.carrier,
    unit: rate.unit,
    region: rate.region,
  };
};

export default ratePresenter;
