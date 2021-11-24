import { Component, ReactElement } from 'react';
import { Car } from '../../interfaces/car';
import Store from '../../services/store';
import Card from '../overview/card/Card';
import './Details.scss';

interface State {
  car: Car;
}

class Details extends Component {
  state: State = {
    car: {} as Car
  };

  componentDidMount() {
    const vehicleId = this.getVehicleId();
    this.setCarById(vehicleId);
  }

  render(): ReactElement {
    return (
      <div className="details">
        <Card car={this.state.car}></Card>
      </div>
    );
  }

  getVehicleId(): string {
    const { pathname } = window.location;
    return pathname?.split('/').pop() || '';
  }

  async setCarById(id: string): Promise<void> {
    const car = await Store.getCarById(id);
    this.setState({ car });
  }
}

export default Details;
