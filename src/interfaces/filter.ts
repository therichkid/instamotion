export interface FilterMap {
  [key: string]: FilterEntry[];
}

interface FilterEntry {
  value: string | number;
  match: FilterMatch;
}

export interface FilterUIMap {
  [key: string]: FilterUIEntry[];
}

export interface FilterUIEntry {
  match: FilterMatch;
  element: FilterUIElement;
  options?: { label: string; value: string | number }[];
}

export enum FilterMatch {
  EXACT,
  INCLUDES,
  GTE,
  LTE
}

export enum FilterUIElement {
  INPUT_TEXT,
  INPUT_NUMBER,
  INPUT_DATE,
  SELECT
}
