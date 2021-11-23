import { Component, ReactElement } from 'react';
import { Car } from '../../interfaces/car';
import { fetchCars } from '../../services/api';
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
        <h2>Overview</h2>

        <div className="grid">
          {this.state.cars.map(car => (
            <div>
              {car.make} {car.model}
            </div>
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
