import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import {
  changeDefaultCurrency,
  selectCurrencies,
  setCurrencies,
  getCurrenciesFetch,
} from "./reduxFeatures/store";
import DefaultCurrency from "./pages/DefaultCurrency";
import Home from "./pages/Home";

function App() {
  const { currencies, defaultCurrency } = useSelector(selectCurrencies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrenciesFetch());
    const isDefaultCurrency = localStorage.getItem("defaultCurrency");
    if (isDefaultCurrency) {
      dispatch(changeDefaultCurrency(JSON.parse(isDefaultCurrency)));
    } else {
      navigate("default-currency");
    }
  }, [dispatch]);

  console.log(currencies);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="default-currency" element={<DefaultCurrency />} />
      </Routes>
    </div>
  );
}

const AppWrapper = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

export default AppWrapper;
