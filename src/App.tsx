import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useParams } from "react-router-dom";
import "../src/assets/css/main.scss";
import { RootState } from "./app/Store";
import Alert from "./components/cart/Alert";
import Cart from "./components/cart/Cart";
import usefetch from "./components/customHooks/UseFetch";
import useSearchParams from "./components/customHooks/useSearchParam";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import InnerFilter from "./components/InnerFilter";
import Wishlist from "./components/Wishlist";
import Catagory from "./pages/Catagory";
import Home from "./pages/Home";
import Singlepage from "./pages/Singlepage";

function App() {
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);
  const fetchData = usefetch();
  const prod = useSelector((state: RootState) => {
    return state.cart.allProducts;
  });

  function contentLoaded() {
    setIsFullyLoaded(true);
  }

  useEffect(() => {
    window.addEventListener("load", contentLoaded);
    fetchData();
    return () => window.removeEventListener("DOMContentLoaded", contentLoaded);
  }, []);

  return (
    <>
      <Header prod={prod} />
      <Alert />

      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/"
          element={
            isFullyLoaded ? (
              <Home prod={prod} />
            ) : (
              <div className="loading"></div>
            )
          }
        />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/products/:productID/:productTitle/"
          element={<Singlepage />}
        />
        <Route path="/catagory/:category" element={<Catagory prod={prod} />} />
        <Route path="/category/:category/:brand" element={<InnerFilter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
