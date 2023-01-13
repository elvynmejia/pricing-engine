import { Rate, CarrierCoverage } from './types/internal';

const MAX_ALLOWED_WEIGHT: number = 800;

const carrierCoverage: CarrierCoverage[] = [
  {
    zip: 94107,
    name: 'x',
  },
  {
    zip: 94108,
    name: 'y',
  },
  {
    zip: 94109,
    name: 'z',
  },
  {
    zip: 94110,
    name: 'x',
  },
  {
    zip: 94111,
    name: 'y',
  },
  {
    zip: 94112,
    name: 'z',
  },
  {
    zip: 94113,
    name: 'x',
  }
];

const rates: Rate[] = [
  {
    price: 10,
    zip: 94107,
    max_weight: 800,
    carrier: 'x',
    unit: 'oz',
    region: 'local'
  },
  {
    price: 11,
    zip: 94108,
    max_weight: 800,
    carrier: 'y',
    unit: 'oz',
    region: 'national'
  },
  {
    price: 12,
    zip: 94109,
    max_weight: 800,
    carrier: 'z',
    unit: 'oz',
    region: 'local'
  },
  {
    price: 13,
    zip: 94110,
    max_weight: 800,
    carrier: 'x',
    unit: 'oz',
    region: 'national_plus'
  },
  {
    price: 14,
    zip: 94111,
    max_weight: 800,
    carrier: 'y',
    unit: 'oz',
    region: 'national_plus'
  },
  {
    price: 15,
    zip: 94112,
    max_weight: 800,
    carrier: 'z',
    unit: 'oz',
    region: 'local'
  },
  {
    price: 16,
    zip: 94113,
    max_weight: 800,
    carrier: 'x',
    unit: 'oz',
    region: 'local'
  }
];

export {
  MAX_ALLOWED_WEIGHT,
  rates,
  carrierCoverage
}
