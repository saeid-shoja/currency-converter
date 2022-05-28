export type stateObject = {
  code: string;
  value: number;
};

export type statesType = {
  defaultCurrency: string;
  currencies: stateObject[];
};
