import { Car } from '../../../interfaces/car';
import './Card.scss';

interface Props {
  car: Car | undefined;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src={props.car?.image} alt={`${props.car?.make} ${props.car?.model}`} loading="lazy" className="image" />
      {props.car?.make} {props.car?.model}
    </div>
  );
};

export default Card;
