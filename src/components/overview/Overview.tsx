import { Component, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import Card from './card/Card';
import Sidebar from './sidebar/Sidebar';
import './Overview.scss';

interface State {
  cars: Car[];
}

class Overview extends Component {
  state: State = {
    cars: []
  };

  componentDidMount(): void {
    this.setCars();
  }

  render(): ReactElement {
    return (
      <div className="overview">
        <Sidebar />

        <div className="vertical-separator"></div>

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

  async setCars(): Promise<void> {
    const cars = await Store.getCars();
    this.setState({ cars });
  }
}

export default Overview;
