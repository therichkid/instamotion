import { Car } from '../interfaces/car';
import { fetchCars } from './api';
import { delay } from './delay';

class Store {
  private cars: Car[] = [];
  private isLoadingCars = false;
  private hasLoadedCars = false;

  scrollPosition = 0;

  getCars(): Promise<Car[]> {
    return new Promise(async (resolve, reject) => {
      try {
        if (this.isLoadingCars) {
          await delay(1000);
        }
        if (!this.hasLoadedCars) {
          await this.setCars();
        }
        resolve(this.cars);
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
