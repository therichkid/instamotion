import { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../../interfaces/car';
import { fetchCars } from '../../services/api';
import Card from './card/Card';
import './Overview.scss';

interface State {
  cars: Car[];
}

class Overview extends Component {
  state: State = {
    cars: []
  };

  componentDidMount(): void {
    this.getCars();
  }

  render(): ReactElement {
    return (
      <div className="overview">
        <div className="grid">
          {this.state.cars.map((car, index) => (
            <Link to={`/details/${car.vehicleId}`} key={index}>
              <Card car={car} />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  async getCars(): Promise<void> {
    const cars = await fetchCars();
    this.setState({
      cars
    });
  }
}

export default Overview;
