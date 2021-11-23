import { Car } from '../interfaces/car';

export const fetchCars = (): Promise<Car[]> => {
  return new Promise((resolve, reject) => {
    try {
      fetch('http://demo9481430.mockable.io/offers')
        .then(handleErrors)
        .then(response => response.json())
        .then(data => resolve(data.data.getOffersV3Beta.records));
    } catch (error) {
      reject(error);
    }
  });
};

const handleErrors = (response: Response): Response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};
