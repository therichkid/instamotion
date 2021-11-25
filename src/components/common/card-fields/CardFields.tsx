import { ReactElement } from 'react';
import { Car } from '../../../interfaces/car';
import { formatDate, toLabelCase } from '../../../services/ui';
import './CardFields.scss';

interface Props {
  car: Car | undefined;
}

const CardFields = (props: Props) => {
  const generateSubfield = (
    name: keyof Car,
    formatValue?: (value: string | number) => string | number
  ): ReactElement => {
    const value = props.car?.[name];
    return (
      <div className="subfield">
        <div className="label">{toLabelCase(name)}</div>
        <div className="value">{value && formatValue ? formatValue(value) : value}</div>
      </div>
    );
  };

  return (
    <div className="card-fields">
      <div className="title">
        {props.car?.make} {props.car?.model}
      </div>
      {generateSubfield('mileage')}
      {generateSubfield('firstRegistration', formatDate)}
      {generateSubfield('fuel')}
      {generateSubfield('power')}
      {generateSubfield('consumptionCombined')}
      {generateSubfield('co2')}
    </div>
  );
};

export default CardFields;
