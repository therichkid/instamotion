import { ReactElement } from 'react';
import { Car } from '../../../interfaces/car';
import { camelToLabelCase, formatDate } from '../../../services/ui';
import './FieldGrid.scss';

interface Props {
  car: Car | undefined;
}

const FieldGrid = (props: Props) => {
  const generateSubfield = (
    name: string,
    formatValue?: (value: string | number) => string | number
  ): ReactElement | unknown => {
    const value = props.car?.[name];
    return (
      value && (
        <div className="subfield">
          <div className="label">{camelToLabelCase(name)}</div>
          <div className="value">{value && formatValue ? formatValue(value as string | number) : value}</div>
        </div>
      )
    );
  };

  return (
    <div className="field-grid">
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

export default FieldGrid;
