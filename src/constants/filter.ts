import { CarFilter, FilterField, FilterMatch } from '../interfaces/filter';

export const CAR_FILTER: CarFilter = {
  make: [{ match: FilterMatch.INCLUDES, field: FilterField.INPUT_TEXT }],
  model: [{ match: FilterMatch.INCLUDES, field: FilterField.INPUT_TEXT }],
  mileage: [
    { match: FilterMatch.GTE, field: FilterField.INPUT_NUMBER },
    { match: FilterMatch.LTE, field: FilterField.INPUT_NUMBER }
  ],
  power: [
    { match: FilterMatch.GTE, field: FilterField.INPUT_NUMBER },
    { match: FilterMatch.LTE, field: FilterField.INPUT_NUMBER }
  ],
  firstRegistration: [{ match: FilterMatch.EXACT, field: FilterField.INPUT_DATE }],
  fuel: [{ match: FilterMatch.EXACT, field: FilterField.SELECT }],
  price: [
    { match: FilterMatch.GTE, field: FilterField.INPUT_NUMBER },
    { match: FilterMatch.LTE, field: FilterField.INPUT_NUMBER }
  ],
  gearbox: [{ match: FilterMatch.EXACT, field: FilterField.SELECT }],
  exteriorColor: [{ match: FilterMatch.INCLUDES, field: FilterField.INPUT_TEXT }],
  category: [{ match: FilterMatch.INCLUDES, field: FilterField.INPUT_TEXT }]
};
