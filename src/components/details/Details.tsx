import { useEffect, useState } from 'react';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import CardFields from '../common/card-fields/CardFields';
import './Details.scss';

const Details = () => {
  const [car, setCar] = useState<Car | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const carId = getCarIdFromRoute();
      const _car = await Store.getCarById(carId);
      setCar(_car);
    })();
  }, []);

  const getCarIdFromRoute = (): string => {
    const { pathname } = window.location;
    return pathname?.split('/').pop() || '';
  };

  return (
    <div className="details">
      <CardFields car={car}></CardFields>
    </div>
  );
};

export default Details;
