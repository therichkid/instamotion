import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CAR_FILTER } from '../../../constants/filter';
import { CarFilterField, FilterElement, FilterMatch } from '../../../interfaces/filter';
import { toLabelCase } from '../../../services/ui';
import './Sidebar.scss';

const Sidebar = () => {
  const [filter, setFilter] = useState<{ [key: string]: string }>(flattenFilter());
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    const searchParams: { [key: string]: string } = {};
    for (const key in filter) {
      const value = filter[key];
      if (value != null && value !== '') {
        searchParams[key] = value;
      }
    }
    setSearchParams(searchParams);
  }, [filter, setSearchParams]);

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
        return <input type="text" name={name} value={filter[name]} onChange={event => handleChange(name, event)} />;
      case FilterElement.INPUT_NUMBER:
        return <input type="number" name={name} value={filter[name]} onChange={event => handleChange(name, event)} />;
      case FilterElement.INPUT_DATE:
        return <input type="date" name={name} value={filter[name]} onChange={event => handleChange(name, event)} />;
      case FilterElement.SELECT:
        return (
          <select name={name} value={filter[name]} onChange={event => handleChange(name, event)}>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        );
    }
  };

  const handleChange = (name: string, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const value = event.target.value;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  function flattenFilter(): { [key: string]: string } {
    const map: { [key: string]: string } = {};
    for (const name in CAR_FILTER) {
      const option = CAR_FILTER[name];
      for (const field of option) {
        map[setFieldName(name, field)] = '';
      }
    }
    return map;
  }

  function setFieldName(name: string, field: CarFilterField): string {
    if (field.match === FilterMatch.GTE) {
      return name + 'From';
    } else if (field.match === FilterMatch.LTE) {
      return name + 'To';
    }
    return name;
  }

  return (
    <div className="sidebar">
      {Object.entries(CAR_FILTER).map(([name, fields]) => {
        return generateFilterOption(name, fields);
      })}
    </div>
  );
};

export default Sidebar;
