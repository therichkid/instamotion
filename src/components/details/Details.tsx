import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import CardFields from '../common/card-fields/CardFields';
import ImageCarousel from '../common/image-carousel/ImageCarousel';
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

  const navigate = useNavigate();

  return (
    <div className="details">
      <div className="container">
        <ImageCarousel images={car?.images || []} />

        <CardFields car={car}></CardFields>

        <button className="back-button" onClick={() => navigate(-1)}>
          <span className="icon">&#8249;</span>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Details;
