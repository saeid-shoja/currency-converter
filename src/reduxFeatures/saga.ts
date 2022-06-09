import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { stateObject } from "../types/states";
import { setCurrencies } from "./store";

const getCurrencies = () =>
  axios.get(
    "https://api.currencyapi.com/v3/latest?apikey=v4RfQ88obCDxQDtIMdBlcZkqsKByjz2eFZv5CbOz"
  );

function* fetchCurrencies() {
  const currencies: stateObject[] = yield call(getCurrencies);
  yield put(setCurrencies(currencies));
}

function* getCurrencySaga() {
  yield takeEvery("currencies/setCurrencies", fetchCurrencies);
}

export default getCurrencySaga;
