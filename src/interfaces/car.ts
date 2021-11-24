export interface Car extends CarFilter, CarTile {
  vehicleId: string;
}

export interface CarFilter {
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

export interface CarTile {
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
