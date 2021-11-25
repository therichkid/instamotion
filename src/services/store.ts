import { Car } from '../interfaces/car';
import { FilterMap } from '../interfaces/filter';
import { fetchCars } from './api';
import { delay } from './delay';
import { applyFilter } from './filter';

class Store {
  private cars: Car[] = [];
  private isLoadingCars = false;
  private hasLoadedCars = false;

  scrollPosition = 0;

  getCars(filterMap?: FilterMap): Promise<Car[]> {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.isLoadingCars) {
          await delay(1000);
        }
        if (!this.hasLoadedCars) {
          await this.setCars();
        }
        if (filterMap && Object.keys(filterMap).length) {
          resolve(applyFilter(this.cars, filterMap));
        } else {
          resolve(this.cars);
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  getCarById(id: string | undefined): Promise<Car | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.hasLoadedCars) {
          await this.setCars();
        }
        const car = this.cars.find(_car => _car.vehicleId === id);
        resolve(car);
      } catch (error) {
        reject(error);
      }
    });
  }

  private setCars(): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        this.isLoadingCars = true;
        const cars = await fetchCars();
        this.cars = cars || [];
        this.isLoadingCars = false;
        this.hasLoadedCars = true;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new Store();
