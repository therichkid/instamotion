import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import Card from './card/Card';
import './Overview.scss';
import Sidebar from './sidebar/Sidebar';

const Overview = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    (async () => {
      const _cars = await Store.getCars();
      setCars(_cars);
    })();
  });

  return (
    <div className="overview">
      <Sidebar />

      <div className="vertical-separator"></div>

      <div className="grid">
        {cars.map((car, index) => (
          <Link to={`/details/${car.vehicleId}`} key={index}>
            <Card car={car} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Overview;
