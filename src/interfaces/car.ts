export interface Car extends CarFilterFields, CarTileFields {
  vehicleId: string;
  images: string[];
  [key: string]: any;
}

export interface CarFilterFields {
  make: string;
  model: string;
  mileage: number;
  power: number;
  firstRegistration: string; // yyy.mm.d
  fuel: string;
  price: number;
  gearbox: string;
  exteriorColor: string;
  category: string;
}

export interface CarTileFields {
  image: string;
  make: string;
  model: string;
  mileage: number;
  power: number;
  firstRegistration: string; // yyy.mm.d
  fuel: string;
  consumptionCombined: number;
  co2: number;
}
