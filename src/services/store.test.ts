import { fetchCars } from './api';
import Store from './store';

describe('store', () => {
  it('returns the same data as the api is fetching', async () => {
    const carsFromStore = await Store.getCars();
    const carsFromApi = await fetchCars();

    expect(carsFromStore).toEqual(carsFromApi);
  });

  it('returns a car by id', async () => {
    const car = await Store.getCarById('IM18-0042418:WiPe-D304842');

    expect(car).not.toBe(undefined);
  });
});
