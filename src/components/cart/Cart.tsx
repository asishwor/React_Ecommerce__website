import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SingleCart from "./SingleCart";
import { RootState } from "../../app/Store";
import { ProdTypes } from "../customHooks/UseFetch";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    cart.map((el: ProdTypes) => {
      total += el.price;
    });

    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="cart container">
      {cart.length >= 1 ? (
        <>
          <div className="cart__items">
            {cart.map((prod: ProdTypes) => {
              return (
                <SingleCart
                  brand={prod.brand}
                  category={prod.category}
                  discountPercentage={prod.discountPercentage}
                  key={prod.id}
                  id={prod.id}
                  title={prod.title}
                  thumbnail={prod.thumbnail}
                  rating={prod.rating}
                  price={prod.price}
                />
              );
            })}
            <div className="total__cartPrice">
              <h3>Total </h3>
              <span>रु {totalPrice}</span>
            </div>
          </div>
        </>
      ) : (
        <div className="no__items">
          <p>There are no items in this cart</p>
          <Link to={"/"}>
            <button className="btn-primary">Continue to Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
