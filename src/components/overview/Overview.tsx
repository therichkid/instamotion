import React from 'react';
import { Car } from '../../interfaces/car';
import { fetchCars } from '../../services/api';
import './Overview.scss';

class Overview extends React.Component {
  render() {
    return (
      <div className="overview">
        <h2>Overview</h2>
        <button onClick={this.getCars}>Get Cars</button>
      </div>
    );
  }

  async getCars(): Promise<void> {
    const cars: Car[] = await fetchCars();
    console.log({ cars });
  }
}

export default Overview;
