import { Component, ReactElement } from 'react';
import { CAR_FILTER } from '../../../constants/filter';
import { CarFilterField, FilterElement, FilterMatch } from '../../../interfaces/filter';
import { toLabelCase } from '../../../services/ui';
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
    const fieldName = this.setFieldName(name, field);
    return (
      <div className="field" key={fieldName}>
        {this.generateFilterLabel(fieldName)} {this.generateFilterInput(fieldName, field)}
      </div>
    );
  }

  generateFilterLabel(name: string): ReactElement {
    const labelName = toLabelCase(name);
    return <label htmlFor={name}>{labelName}</label>;
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

  private setFieldName(name: string, field: CarFilterField): string {
    if (field.match === FilterMatch.GTE) {
      return name + 'From';
    } else if (field.match === FilterMatch.LTE) {
      return name + 'To';
    }
    return name;
  }
}

export default Sidebar;
