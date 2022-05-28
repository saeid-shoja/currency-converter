import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import store, {
  changeDefaultCurrency,
  selectCurrencies,
  setCurrencies,
} from "./features/store";
import DefaultCurrency from "./pages/DefaultCurrency";
import Home from "./pages/Home";
import axios from "axios";

function App() {
  const { currencies, defaultCurrency } = useSelector(selectCurrencies);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchCurrencies();
    const isDefaultCurrency = localStorage.getItem("defaultCurrency");
    if (isDefaultCurrency) {
      dispatch(changeDefaultCurrency(JSON.parse(isDefaultCurrency)));
    } else {
      navigate("default-currency");
    }
  }, [defaultCurrency, currencies]);

  const fetchCurrencies = () => {
    axios
      .get(
        "https://api.currencyapi.com/v3/latest?apikey=v4RfQ88obCDxQDtIMdBlcZkqsKByjz2eFZv5CbOz"
      )
      .then((res) => dispatch(setCurrencies(res.data.data)))
      .catch((err) => console.log(err.message));
  };

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
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

export default AppWrapper;
