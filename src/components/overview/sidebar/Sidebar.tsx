import { ReactElement } from 'react';
import { CAR_FILTER } from '../../../constants/filter';
import { CarFilterField, FilterElement, FilterMatch } from '../../../interfaces/filter';
import { toLabelCase } from '../../../services/ui';
import './Sidebar.scss';

const Sidebar = () => {
  const generateFilterOption = (name: string, fields: CarFilterField[]): ReactElement => {
    return (
      <div className="option" key={name}>
        {fields.map(field => generateFilterField(name, field))}
      </div>
    );
  };

  const generateFilterField = (name: string, field: CarFilterField): ReactElement => {
    const fieldName = setFieldName(name, field);
    return (
      <div className="field" key={fieldName}>
        {generateFilterLabel(fieldName)} {generateFilterInput(fieldName, field)}
      </div>
    );
  };

  const generateFilterLabel = (name: string): ReactElement => {
    const labelName = toLabelCase(name);
    return <label htmlFor={name}>{labelName}</label>;
  };

  const generateFilterInput = (name: string, field: CarFilterField): ReactElement => {
    switch (field.element) {
      case FilterElement.INPUT_TEXT:
        return <input type="text" name={name} />;
      case FilterElement.INPUT_NUMBER:
        return <input type="number" name={name} />;
      case FilterElement.INPUT_DATE:
        return <input type="date" name={name} />;
      case FilterElement.SELECT:
        return (
          <select name={name}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        );
    }
  };

  const setFieldName = (name: string, field: CarFilterField): string => {
    if (field.match === FilterMatch.GTE) {
      return name + 'From';
    } else if (field.match === FilterMatch.LTE) {
      return name + 'To';
    }
    return name;
  };

  return (
    <div className="sidebar">
      {Object.entries(CAR_FILTER).map(([name, fields]) => {
        return generateFilterOption(name, fields);
      })}
    </div>
  );
};

export default Sidebar;
