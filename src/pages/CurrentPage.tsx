import { useCallback } from "react";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCurrencies } from "../features/store";
import styles from "./pages.module.css";

const CurrentPage = () => {
  const { defaultCurrency, currencies } = useSelector(selectCurrencies);

  const perEurCalculation = useCallback(() => {
    const result =
      currencies[defaultCurrency]?.value / currencies["EUR"]?.value;
    return result;
  }, [currencies, defaultCurrency]);

  return (
    <div className={styles.currentPage}>
      <h1>Your Default Currency</h1>
      <div className={styles.currentPageRows}>
        <div>USD : 1</div>
        <CgArrowsExchangeAlt className={styles.convertIcon} />
        <div>
          {defaultCurrency} : {currencies[defaultCurrency]?.value}
        </div>
      </div>
      <div className={styles.currentPageRows}>
        <div>EUR : 1</div>
        <CgArrowsExchangeAlt className={styles.convertIcon} />
        <div>
          {defaultCurrency} : {perEurCalculation()}
        </div>
      </div>
      <p>
        do you want to change your default currency:
        <Link to="default-currency">Change default currency</Link>
      </p>
    </div>
  );
};

export default CurrentPage;
