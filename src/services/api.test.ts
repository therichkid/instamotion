import { fetchCars } from './api';

describe('api', () => {
  it('fetches cars from the rest endpoint', async () => {
    const cars = await fetchCars();
    expect(cars).not.toEqual([]);
  });
});
