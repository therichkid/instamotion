import { CAR_FILTER_UI_MAP } from '../constants/filter';
import { Car } from '../interfaces/car';
import { FilterMap, FilterMatch, FilterUIElement, FilterUIEntry } from '../interfaces/filter';
import { deserializeDate, deserializeFilterKey } from './serialize';

enum ValueType {
  STRING,
  NUMBER,
  DATE
}

export const paramToFilterMap = (paramMap: { [key: string]: string }): FilterMap => {
  const map: FilterMap = {};

  for (const key in paramMap) {
    const value = parseValue(key, paramMap[key]);
    const match = getMatch(key);

    const deserKey = deserializeFilterKey(key);
    if (!map[deserKey]) {
      map[deserKey] = [];
    }
    map[deserKey].push({ value, match });
  }

  return map;
};

export const applyFilter = (cars: Car[], filterMap: FilterMap): Car[] => {
  return cars.filter(car => {
    let isMatching = true;

    for (const key in filterMap) {
      const filterEntries = filterMap[key];
      isMatching = filterEntries.every(entry => {
        const isStringCompare = typeof car[key] === 'string' && typeof entry.value === 'string';
        const isNumberCompare = typeof car[key] === 'number' && typeof entry.value === 'number';
        const carValue = isStringCompare ? (car[key] as string).toLowerCase() : car[key];
        const entryValue = isStringCompare ? (entry.value as string).toLowerCase() : entry.value;

        switch (entry.match) {
          case FilterMatch.EXACT:
            return carValue === entryValue;
          case FilterMatch.INCLUDES:
            return isStringCompare && carValue.includes(entryValue);
          case FilterMatch.GTE:
            return isNumberCompare && carValue >= entryValue;
          case FilterMatch.LTE:
            return isNumberCompare && carValue <= entryValue;
          default:
            return false;
        }
      });

      if (!isMatching) {
        return false;
      }
    }

    return isMatching;
  });
};

const parseValue = (key: string, value: string): string | number => {
  const type = getValueType(key);
  switch (type) {
    case ValueType.NUMBER:
      return parseInt(value, 10);
    case ValueType.DATE:
      return deserializeDate(value);
    default:
      return value;
  }
};

const getMatch = (key: string): FilterMatch => {
  if (key.endsWith('From')) {
    return FilterMatch.GTE;
  } else if (key.endsWith('To')) {
    return FilterMatch.LTE;
  }
  return getPropsInUIMap(key)[0].match;
};

const getValueType = (key: string): ValueType => {
  const element = getPropsInUIMap(key)[0].element;
  switch (element) {
    case FilterUIElement.INPUT_NUMBER:
      return ValueType.NUMBER;
    case FilterUIElement.INPUT_DATE:
      return ValueType.DATE;
    default:
      return ValueType.STRING;
  }
};

const getPropsInUIMap = (key: string): FilterUIEntry[] => {
  return CAR_FILTER_UI_MAP[deserializeFilterKey(key)];
};
