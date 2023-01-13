import { Rate as InternalRate } from '../types/internal';
import { Rate as ExternalRate } from '../types/external';

export const ratePresenter = (rate: InternalRate): ExternalRate => {
  return {
    price: rate.price,
    zip: rate.zip,
    carrier: rate.carrier,
    unit: rate.unit,
    region: rate.region,
  };
};

export default ratePresenter;
