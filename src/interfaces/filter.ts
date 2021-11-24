export enum FilterMatch {
  EXACT,
  INCLUDES,
  GTE,
  LTE
}

export enum FilterElement {
  INPUT_TEXT,
  INPUT_NUMBER,
  INPUT_DATE,
  SELECT
}

export interface CarFilterField {
  match: FilterMatch;
  element: FilterElement;
}

export interface CarFilterMap {
  [key: string]: CarFilterField[];
}
