import { Car } from '../../interfaces/car';
import { fetchCars } from '../../services/api';
import './Overview.scss';

function Overview() {
  return (
    <div className="overview">
      <h2>Overview</h2>

      <button onClick={getCars}>Get Cars</button>
    </div>
  );
}

async function getCars() {
  const cars: Car[] = await fetchCars();
  console.log({ cars });
}

export default Overview;
