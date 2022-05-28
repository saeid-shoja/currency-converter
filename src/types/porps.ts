export type inputPropsType = {
  list: string[];
  onCurrencyChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  currency: string;
};

export type currentPageType = {
  currentPage: boolean;
  setCurrentPage: (state: boolean) => void;
};
