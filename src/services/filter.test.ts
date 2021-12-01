import { FilterMap, FilterMatch } from '../interfaces/filter';
import { paramToFilterMap } from './filter';

describe('filter', () => {
  it('should properly parse a param map to a filter map', () => {
    const paramMap: { [key: string]: string } = {
      make: 'seat',
      model: 'mii',
      mileageFrom: '50000',
      mileageTo: '60000',
      fuel: 'PETROL',
      firstRegistration: '2019-01'
    };

    const filterMap: FilterMap = {
      make: [{ value: 'seat', match: FilterMatch.INCLUDES }],
      model: [{ value: 'mii', match: FilterMatch.INCLUDES }],
      mileage: [
        { value: 50000, match: FilterMatch.GTE },
        { value: 60000, match: FilterMatch.LTE }
      ],
      fuel: [{ value: 'PETROL', match: FilterMatch.EXACT }],
      firstRegistration: [{ value: '019.01', match: FilterMatch.INCLUDES }]
    };

    expect(paramToFilterMap(paramMap)).toEqual(filterMap);
  });
});
