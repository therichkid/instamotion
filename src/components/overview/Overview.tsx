import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car } from '../../interfaces/car';
import { paramToFilterMap } from '../../services/filter';
import Store from '../../services/store';
import Card from './card/Card';
import './Overview.scss';
import Sidebar from './sidebar/Sidebar';

const Overview = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const { search } = useLocation();
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Used to restore scroll position on route change
    // Scroll restoration won't work here with the current layout
    const scrollerElement = scroller.current;
    if (scrollerElement) {
      scrollerElement.scrollTop = Store.scrollPosition;
      scrollerElement.addEventListener('scroll', onScroll);
    }

    return () => {
      scrollerElement?.removeEventListener('scroll', onScroll);
    };
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const paramMap: { [key: string]: string } = {};
    searchParams.forEach((value, key) => (paramMap[key] = value));
    const filterMap = paramToFilterMap(paramMap);

    (async () => {
      const _cars = await Store.getCars(filterMap);
      setCars(_cars);
    })();
  }, [search]);

  const onScroll = () => {
    Store.scrollPosition = scroller.current?.scrollTop || 0;
  };

  return (
    <div className="overview">
      <Sidebar />

      <div className="vertical-separator"></div>

      <div className="grid" ref={scroller}>
        {cars.map((car, index) => (
          <Link to={`/details/${car.vehicleId}`} key={index}>
            <Card car={car} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Overview;
