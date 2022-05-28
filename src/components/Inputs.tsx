import React from "react";
import { inputPropsType } from "../types/porps";
import styles from "./component.module.css";

const SelectInputs = ({ list, onCurrencyChange, currency }: inputPropsType) => {
  return (
    <select
      value={currency}
      onChange={onCurrencyChange}
      className={styles.selectInput}
    >
      {list.map((currency: string) => {
        return <option key={currency}>{currency}</option>;
      })}
    </select>
  );
};

export default SelectInputs;
