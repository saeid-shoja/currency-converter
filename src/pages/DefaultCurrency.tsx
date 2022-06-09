import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  selectCurrencies,
  changeDefaultCurrency,
  AppDispatch,
} from "../reduxFeatures/store";
import styles from "./pages.module.css";

const DefaultCurrency = () => {
  const { defaultCurrency, currencies } = useSelector(selectCurrencies);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const DefaultCurrencyHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeDefaultCurrency(e.target.value));
  };

  const setDefaultCurrency = () => {
    localStorage.setItem("defaultCurrency", JSON.stringify(defaultCurrency));
    navigate("/");
  };

  const currencyKeys = Object.keys(currencies);

  return (
    <form className={styles.defaultForm}>
      <select value={defaultCurrency} onChange={DefaultCurrencyHandler}>
        {currencyKeys.map((currency: string) => {
          return <option key={currency}>{currency}</option>;
        })}
      </select>
      <button onClick={setDefaultCurrency}>Set Your Currency</button>
    </form>
  );
};

export default DefaultCurrency;
