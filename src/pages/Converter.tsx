import React, { useState } from "react";
import { useSelector } from "react-redux";
import SelectInputs from "../components/Inputs";
import { selectCurrencies } from "../reduxFeatures/store";
import styles from "./pages.module.css";

const Converter = () => {
  const { currencies } = useSelector(selectCurrencies);
  const [amount1, setAmount1] = useState<number>(1);
  const [amount2, setAmount2] = useState<number>(currencies["EUR"]?.value);
  const [currency1, setCurrency1] = useState<string>("USD");
  const [currency2, setCurrency2] = useState<string>("EUR");

  const onAmount1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount1(Number(e.target.value));
    setAmount2(
      (Number(e.target.value) * currencies[currency2]?.value) /
        currencies[currency1]?.value
    );
  };

  const onAmount2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount2(Number(e.target.value));
    setAmount1(
      (Number(e.target.value) * currencies[currency1]?.value) /
        currencies[currency2]?.value
    );
  };

  const onCurrency1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency1(e.target.value);
    setAmount2(
      (amount1 * currencies[currency2]?.value) /
        currencies[e.target.value]?.value
    );
  };

  const onCurrency2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrency2(e.target.value);
    setAmount1(
      (amount2 * currencies[currency1]?.value) /
        currencies[e.target.value]?.value
    );
  };

  const currencyValues = Object.keys(currencies);

  return (
    <div className={styles.converter}>
      <h1>Converter</h1>
      <div>
        <input
          className={styles.amountInput}
          type="number"
          onChange={onAmount1Change}
          value={amount1}
          min="0"
        />
        <SelectInputs
          currency={currency1}
          onCurrencyChange={onCurrency1Change}
          list={currencyValues}
        />
      </div>
      <div>
        <input
          className={styles.amountInput}
          type="number"
          onChange={onAmount2Change}
          value={amount2}
          min="0"
        />
        <SelectInputs
          currency={currency2}
          onCurrencyChange={onCurrency2Change}
          list={currencyValues}
        />
      </div>
    </div>
  );
};

export default Converter;
