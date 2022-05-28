import React from "react";
import styles from "./component.module.css";
import { currentPageType } from "../types/porps";

const Navbar = ({ currentPage, setCurrentPage }: currentPageType) => {
  const goToConverter = () => setCurrentPage(false);
  const goToCurrentPage = () => setCurrentPage(true);
  return (
    <div className={styles.navbar}>
      <button
        onClick={goToConverter}
        className={!currentPage ? styles.activeBtn : styles.navbarButton}
      >
        Converter
      </button>
      <button
        onClick={goToCurrentPage}
        className={currentPage ? styles.activeBtn : styles.navbarButton}
      >
        Current Page
      </button>
    </div>
  );
};

export default Navbar;
