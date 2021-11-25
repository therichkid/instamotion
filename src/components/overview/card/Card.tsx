import { Car } from '../../../interfaces/car';
import CardFields from '../../common/card-fields/CardFields';
import './Card.scss';

interface Props {
  car: Car | undefined;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src={props.car?.image} alt={`${props.car?.make} ${props.car?.model}`} loading="lazy" className="image" />
      <CardFields car={props.car} />
    </div>
  );
};

export default Card;
