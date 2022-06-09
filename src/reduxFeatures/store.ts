import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateObject, statesType } from "../types/states";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

export const saga = createSagaMiddleware();

const initialState: statesType = {
  defaultCurrency: "USD",
  currencies: [],
  isLoading: false,
};

export const converterSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<stateObject[]>) => {
      state.currencies = action.payload;
      state.isLoading = false;
    },
    changeDefaultCurrency: (
      state: { defaultCurrency: string },
      action: PayloadAction<string>
    ) => {
      state.defaultCurrency = action.payload;
    },
    getCurrenciesFetch: (state) => {
      state.isLoading = true;
    },
    getCurrenciesFailed: (state) => {
      state.isLoading = false;
    },
  },
});

export const {
  changeDefaultCurrency,
  setCurrencies,
  getCurrenciesFetch,
  getCurrenciesFailed,
} = converterSlice.actions;
export type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const selectCurrencies = (state: RootState) => state.currenciesReducer;

const store = configureStore({
  reducer: {
    currenciesReducer: converterSlice.reducer,
  },
  middleware: [saga],
});

export default store;
