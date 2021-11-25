import { Car } from '../../../interfaces/car';
import FieldGrid from '../../common/field-grid/FieldGrid';
import './Card.scss';

interface Props {
  car: Car | undefined;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img src={props.car?.image} alt={`${props.car?.make} ${props.car?.model}`} loading="lazy" className="image" />
      <FieldGrid car={props.car} />
    </div>
  );
};

export default Card;
