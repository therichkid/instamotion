import { Car } from '../interfaces/car';
import { fetchCars } from './api';

class Store {
  private cars: Car[] = [];
  private areCarsLoaded = false;

  scrollPosition = 0;

  getCars(): Promise<Car[]> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.areCarsLoaded) {
          await this.setCars();
        }
        resolve(this.cars);
      } catch (error) {
        reject(error);
      }
    });
  }

  getCarById(id: string): Promise<Car | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.areCarsLoaded) {
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
        const cars = await fetchCars();
        this.cars = cars || [];
        this.areCarsLoaded = true;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new Store();
