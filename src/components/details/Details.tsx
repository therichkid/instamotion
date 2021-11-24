import { Component, ReactElement } from 'react';
import './Details.scss';

class Details extends Component {
  vehicleId: string = '';

  componentDidMount() {
    this.vehicleId = this.getVehicleId();
  }

  render(): ReactElement {
    return <div className="details"></div>;
  }

  getVehicleId(): string {
    const { pathname } = window.location;
    return pathname?.split('/').pop() || '';
  }
}

export default Details;
