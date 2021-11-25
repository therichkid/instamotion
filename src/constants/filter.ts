import { FilterMatch, FilterUIElement, FilterUIMap } from '../interfaces/filter';

export const CAR_FILTER_UI_MAP: FilterUIMap = {
  make: [{ match: FilterMatch.INCLUDES, element: FilterUIElement.INPUT_TEXT }],
  model: [{ match: FilterMatch.INCLUDES, element: FilterUIElement.INPUT_TEXT }],
  mileage: [
    { match: FilterMatch.GTE, element: FilterUIElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterUIElement.INPUT_NUMBER }
  ],
  power: [
    { match: FilterMatch.GTE, element: FilterUIElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterUIElement.INPUT_NUMBER }
  ],
  firstRegistration: [{ match: FilterMatch.EXACT, element: FilterUIElement.INPUT_DATE }],
  fuel: [
    {
      match: FilterMatch.EXACT,
      element: FilterUIElement.SELECT,
      options: [
        { label: 'Petrol', value: 'PETROL' },
        { label: 'Diesel', value: 'DIESEL' },
        { label: 'Electric', value: 'ELECTRICITY' }
      ]
    }
  ],
  price: [
    { match: FilterMatch.GTE, element: FilterUIElement.INPUT_NUMBER },
    { match: FilterMatch.LTE, element: FilterUIElement.INPUT_NUMBER }
  ],
  gearbox: [
    {
      match: FilterMatch.EXACT,
      element: FilterUIElement.SELECT,
      options: [
        { label: 'Manual', value: 'MANUAL' },
        { label: 'Automatic', value: 'AUTOMATIC' }
      ]
    }
  ],
  exteriorColor: [{ match: FilterMatch.INCLUDES, element: FilterUIElement.INPUT_TEXT }],
  category: [{ match: FilterMatch.INCLUDES, element: FilterUIElement.INPUT_TEXT }]
};
