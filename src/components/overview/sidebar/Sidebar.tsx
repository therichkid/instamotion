import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CAR_FILTER_UI_MAP } from '../../../constants/filter';
import { FilterUIElement, FilterUIEntry } from '../../../interfaces/filter';
import { serializeFilterKey } from '../../../services/serialize';
import { camelCaseToLabel } from '../../../services/ui';
import './Sidebar.scss';

const Sidebar = () => {
  const [filter, setFilter] = useState<{ [key: string]: string }>(flattenFilterUIMap());
  const [isOpen, setIsOpen] = useState<boolean>(window.innerWidth >= 960);
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

  const generateFilterOption = (name: string, fields: FilterUIEntry[]): ReactElement => {
    return (
      <div className="option" key={name}>
        {fields.map(field => generateFilterField(name, field))}
      </div>
    );
  };

  const generateFilterField = (name: string, field: FilterUIEntry): ReactElement => {
    const fieldName = serializeFilterKey(name, field);
    return (
      <div className="field" key={fieldName}>
        {generateFilterLabel(fieldName)} {generateFilterInput(fieldName, field)}
      </div>
    );
  };

  const generateFilterLabel = (name: string): ReactElement => {
    const labelName = camelCaseToLabel(name);
    return <label htmlFor={name}>{labelName}</label>;
  };

  const generateFilterInput = (name: string, field: FilterUIEntry): ReactElement => {
    switch (field.element) {
      case FilterUIElement.INPUT_TEXT:
        return (
          <input
            type="text"
            name={name}
            value={filter[name]}
            onChange={event => handleChange(name, event)}
            aria-label={name}
          />
        );
      case FilterUIElement.INPUT_NUMBER:
        return (
          <input
            type="number"
            name={name}
            value={filter[name]}
            onChange={event => handleChange(name, event)}
            aria-label={name}
          />
        );
      case FilterUIElement.INPUT_DATE:
        return (
          <input
            type="month"
            name={name}
            value={filter[name]}
            onChange={event => handleChange(name, event)}
            aria-label={name}
          />
        );
      case FilterUIElement.SELECT:
        return (
          <select name={name} value={filter[name]} onChange={event => handleChange(name, event)} aria-label={name}>
            <option value="">-- Select --</option>
            {field.options?.map(({ label, value }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        );
    }
  };

  const handleChange = (name: string, event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const value = event.target.value;
    setFilter(prevFilter => ({ ...prevFilter, [name]: value }));
  };

  const handleToggle = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  function flattenFilterUIMap(): { [key: string]: string } {
    const map: { [key: string]: string } = {};
    for (const name in CAR_FILTER_UI_MAP) {
      const option = CAR_FILTER_UI_MAP[name];
      for (const field of option) {
        map[serializeFilterKey(name, field)] = '';
      }
    }
    return map;
  }

  return isOpen ? (
    <div className="sidebar is-open">
      {Object.entries(CAR_FILTER_UI_MAP).map(([name, fields]) => generateFilterOption(name, fields))}
      <div className="toggle is-open" onClick={handleToggle}>
        &#8249;
      </div>
    </div>
  ) : (
    <div className="sidebar is-closed">
      <div className="toggle is-closed" onClick={handleToggle}>
        &#8250;
      </div>
    </div>
  );
};

export default Sidebar;
