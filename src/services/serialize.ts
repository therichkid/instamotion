import { FilterMatch, FilterUIEntry } from '../interfaces/filter';

export const serializeFilterKey = (key: string, field: FilterUIEntry): string => {
  if (field.match === FilterMatch.GTE) {
    return key + 'From';
  } else if (field.match === FilterMatch.LTE) {
    return key + 'To';
  }
  return key;
};

export const deserializeFilterKey = (key: string): string => {
  if (key.endsWith('From')) {
    return key.slice(0, -4);
  } else if (key.endsWith('To')) {
    return key.slice(0, -2);
  }
  return key;
};

export const deserializeDate = (date: string): string => {
  const [yyyy, mm] = date.split('-');
  return `${yyyy.slice(1)}.${mm}`;
};
