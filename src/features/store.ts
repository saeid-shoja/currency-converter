import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stateObject, statesType } from "../types/states";
import { configureStore } from "@reduxjs/toolkit";

const initialState: statesType = {
  defaultCurrency: "USD",
  currencies: [],
};

export const converterSlice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencies: (state, action: PayloadAction<stateObject[]>) => {
      state.currencies = action.payload;
    },
    changeDefaultCurrency: (state, action: PayloadAction<string>) => {
      state.defaultCurrency = action.payload;
    },
  },
});

export const { changeDefaultCurrency, setCurrencies } = converterSlice.actions;
export type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;
export const selectCurrencies = (state: RootState) => state.currenciesReducer;

const store = configureStore({
  reducer: {
    currenciesReducer: converterSlice.reducer,
  },
  middleware: [],
});

export default store;
