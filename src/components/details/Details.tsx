import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import FieldGrid from '../common/field-grid/FieldGrid';
import ImageCarousel from '../common/image-carousel/ImageCarousel';
import './Details.scss';

const Details = () => {
  const [car, setCar] = useState<Car | undefined>(undefined);
  const { id: carId } = useParams();

  useEffect(() => {
    Store.getCarById(carId).then(_car => setCar(_car));
  }, [carId]);

  const navigate = useNavigate();

  return (
    <div className="details">
      <div className="container">
        <ImageCarousel images={car?.images || []} />

        <FieldGrid car={car}></FieldGrid>

        <button className="back-button" onClick={() => navigate(-1)}>
          <span className="icon">&#8249;</span>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Details;
