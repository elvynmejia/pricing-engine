interface DimensionalWeight {
  height: number;
  length: number;
  width: number;
};

interface Parcel extends DimensionalWeight {
  zip: number;
  weight: number;
  unit: string;
};

type Rate = {
  price: number;
  zip: number;
  max_weight: number;
  carrier: string;
  unit: string;
  region: string;
};

interface Carrier {
  name: string;
};

interface CarrierCoverage extends Carrier {
  zip: number;
};

export {
  Carrier,
  CarrierCoverage,
  DimensionalWeight,
  Parcel,
  Rate
}
