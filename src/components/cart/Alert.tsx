import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { REMOVE_CART_ALERT } from "../../app/slices/CartSlices";
import { Link } from "react-router-dom";

const Alert = () => {
  const isAdded = useSelector((state: RootState) => state.cart.isAdded);
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  return cart.length > 0 ? (
    <div
      className={"alert"}
      style={
        isAdded
          ? { transform: "translate(-50%,0)" }
          : { transform: "translate(-1000%)" }
      }
    >
      <div className="container">
        <span
          className="alert__close"
          onClick={() => {
            dispatch(REMOVE_CART_ALERT());
          }}
        >
          
        </span>
        <div className="cart__alert">
          <p>
            <span className="icon"></span>
            <span>1 new item(s) have been added to your cart</span>
          </p>
          <div className="items__info">
            <div className="image">
              <img src={cart[cart.length - 1].thumbnail} alt="" />
            </div>
            <div className="desctiption">
              <h4>{cart[cart.length - 1].title}</h4>
              <p className="excerpt">{cart[cart.length - 1].description}</p>
              <div>
                <span className="price">रु {cart[cart.length - 1].price}</span>
                <span>
                  qty : <span>{1}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="cart__alert-btn">
            <Link to={"/cart"} onClick={() => dispatch(REMOVE_CART_ALERT())}>
              <button className="btn-primary">Go to Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <span></span>
  );
};

export default Alert;
