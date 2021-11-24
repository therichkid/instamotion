import { CarFilterMap, FilterElement, FilterMatch } from '../interfaces/filter';

export const CAR_FILTER: CarFilterMap = {
  make: [{ match: FilterMatch.INCLUDES, element: FilterElement.INPUT_TEXT }],
  model: [{ match: FilterMatch.INCLUDES, element: FilterElement.INPUT_TEXT }],
  mileage: [
    { match: FilterMatch.GTE, element: FilterElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterElement.INPUT_NUMBER }
  ],
  power: [
    { match: FilterMatch.GTE, element: FilterElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterElement.INPUT_NUMBER }
  ],
  firstRegistration: [{ match: FilterMatch.EXACT, element: FilterElement.INPUT_DATE }],
  fuel: [{ match: FilterMatch.EXACT, element: FilterElement.SELECT }],
  price: [
    { match: FilterMatch.GTE, element: FilterElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterElement.INPUT_NUMBER }
  ],
  gearbox: [{ match: FilterMatch.EXACT, element: FilterElement.SELECT }],
  exteriorColor: [{ match: FilterMatch.INCLUDES, element: FilterElement.INPUT_TEXT }],
  category: [{ match: FilterMatch.INCLUDES, element: FilterElement.INPUT_TEXT }]
};
