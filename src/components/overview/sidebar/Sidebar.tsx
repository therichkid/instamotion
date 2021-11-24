import { Component, ReactElement } from 'react';
import { CAR_FILTER } from '../../../constants/filter';
import { CarFilterField, FilterElement } from '../../../interfaces/filter';
import './Sidebar.scss';

class Sidebar extends Component {
  render(): ReactElement {
    return (
      <div className="sidebar">
        {Object.entries(CAR_FILTER).map(([name, fields]) => {
          return this.generateFilterOption(name, fields);
        })}
      </div>
    );
  }

  generateFilterOption(name: string, fields: CarFilterField[]): ReactElement {
    return (
      <div className="option" key={name}>
        {fields.map(field => this.generateFilterField(name, field))}
      </div>
    );
  }

  generateFilterField(name: string, field: CarFilterField): ReactElement {
    const fieldName = name + field.match;
    return (
      <div className="field" key={fieldName}>
        {this.generateFilterLabel(name)} {this.generateFilterInput(name, field)}
      </div>
    );
  }

  generateFilterLabel(name: string): ReactElement {
    return <label htmlFor={name}>{name}</label>;
  }

  generateFilterInput(name: string, field: CarFilterField): ReactElement {
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
  }
}

export default Sidebar;
