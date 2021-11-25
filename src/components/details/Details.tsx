import { useEffect, useState } from 'react';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import Card from '../overview/card/Card';
import './Details.scss';

const Details = () => {
  const [car, setCar] = useState<Car | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const carId = getCarIdFromRoute();
      const carData = await Store.getCarById(carId);
      setCar(carData);
    })();
  }, []);

  const getCarIdFromRoute = (): string => {
    const { pathname } = window.location;
    return pathname?.split('/').pop() || '';
  };

  return (
    <div className="details">
      <Card car={car}></Card>
    </div>
  );
};

export default Details;
