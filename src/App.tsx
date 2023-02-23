import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import "../src/assets/css/main.scss";
import { RootState } from "./app/Store";
import Alert from "./components/cart/Alert";
import Cart from "./components/cart/Cart";
import usefetch from "./components/customHooks/UseFetch";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InnerFilter from "./components/InnerFilter";
import Wishlist from "./components/Wishlist";
import Catagory from "./pages/Catagory";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Singlepage from "./pages/Singlepage";
import { fetchData } from "./app/slices/products";
function App() {
  const dispatch = useDispatch<any>();
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  // const fetchData = usefetch();

  const prod = useSelector((state: RootState) => {
    return state.main;
  });

  function contentLoaded() {
    setIsFullyLoaded(true);
  }

  useEffect(() => {
    dispatch(fetchData());
    if (document.readyState === "complete") {
      contentLoaded();
    } else {
      window.addEventListener("load", contentLoaded);
      return () => window.removeEventListener("load", contentLoaded);
    }
  }, []);

  return (
    <>
      <Header prod={prod.data} />
      <Alert />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={
            prod.isLoading ? (
              <p className="loading"></p>
            ) : (
              <Home prod={prod.data} />
            )
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/products/:productID/:productTitle/"
          element={<Singlepage />}
        />
        <Route path="/catagory/:category" element={<Catagory />} />
        <Route path="/category/:category/:brand" element={<InnerFilter />} />
        <Route path="/catalog" element={<SearchPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
