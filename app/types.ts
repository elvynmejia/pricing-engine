interface Parcel {
  zip: number;
  weight: number;
  height: number;
  length: number;
  width: number;
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

export {
  Parcel,
  Rate
}
