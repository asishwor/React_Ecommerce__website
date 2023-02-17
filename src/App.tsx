import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/assets/css/main.scss";
import Alert from "./components/cart/Alert";
import Cart from "./components/cart/Cart";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Wishlist from "./components/Wishlist";
import Catagory from "./pages/Catagory";
import Home from "./pages/Home";
import Singlepage from "./pages/Singlepage";

function App() {
  const [isFullyLoaded, setIsFullyLoaded] = useState<boolean>(false);

  function contentLoaded() {
    setIsFullyLoaded(true);
  }
  useEffect(() => {
    window.addEventListener("load", contentLoaded);
    return () => window.removeEventListener("DOMContentLoaded", contentLoaded);
  }, []);

  return (
    <>
      <Header />
      <Alert />

      <Routes>
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/"
          element={isFullyLoaded ? <Home /> : <div className="loading"></div>}
        />

        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/catagory/:id" element={<Catagory />} />
        <Route
          path="/products/:productID/:productTitle"
          element={<Singlepage />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
