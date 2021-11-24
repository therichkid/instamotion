import { Component, ReactElement } from 'react';
import { Car } from '../../../interfaces/car';
import './Card.scss';

interface Props {
  car: Car;
}

class Card extends Component {
  props: Props = {
    car: {} as Car
  };

  constructor(props: Props) {
    super(props);

    this.props = props;
  }

  render(): ReactElement {
    return (
      <div className="card">
        <img
          src={this.props.car.image}
          alt={`${this.props.car.make} ${this.props.car.model}`}
          loading="lazy"
          className="image"
        />
        {this.props.car.make} {this.props.car.model}
      </div>
    );
  }
}

export default Card;
