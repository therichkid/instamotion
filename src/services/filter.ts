import { CAR_FILTER_UI_MAP } from '../constants/filter';
import { Car } from '../interfaces/car';
import { FilterMap, FilterMatch, FilterUIElement, FilterUIEntry } from '../interfaces/filter';

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

    const deserKey = deserializeKey(key);
    if (!map[deserKey]) {
      map[deserKey] = [];
    }
    map[deserKey].push({ value, match });
  }

  return map;
};

export const applyFilter = (cars: Car[], filterMap: FilterMap): Car[] => {
  return cars.filter(car => {
    for (const key in filterMap) {
      const filterEntries = filterMap[key];
      return filterEntries.every(entry => {
        switch (entry.match) {
          case FilterMatch.EXACT:
            return car[key] === entry.value;
          case FilterMatch.INCLUDES:
            return typeof car[key] === 'string' && car[key].includes(entry.value);
          case FilterMatch.GTE:
            return typeof car[key] === 'number' && car[key] >= entry.value;
          case FilterMatch.LTE:
            return typeof car[key] === 'number' && car[key] <= entry.value;
          default:
            return false;
        }
      });
    }

    return true;
  });
};

const parseValue = (key: string, value: string): string | number => {
  const type = getValueType(key);
  switch (type) {
    case ValueType.NUMBER:
      return parseInt(value, 10);
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
  return CAR_FILTER_UI_MAP[deserializeKey(key)];
};

const deserializeKey = (key: string): string => {
  if (key.endsWith('From')) {
    return key.slice(0, -4);
  } else if (key.endsWith('To')) {
    return key.slice(0, -2);
  }
  return key;
};
