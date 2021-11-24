export enum FilterMatch {
  EXACT,
  INCLUDES,
  GTE,
  LTE
}

export enum FilterField {
  INPUT_TEXT,
  INPUT_NUMBER,
  INPUT_DATE,
  SELECT
}

export interface CarFilter {
  [key: string]: { match: FilterMatch; field: FilterField }[];
}
