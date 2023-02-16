import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../app/Store";
import SingleCart from "./cart/SingleCart";

const Wishlist = () => {
  const wishlists = useSelector((state: RootState) => state.cart.favourite);
  return (
    <div className="wishlist cart__items">
      <h2>Your Wishlist Products</h2>
      {wishlists.length > 0 ? (
        wishlists.map((prod) => {
          return (
            <>
              <SingleCart
                id={prod.id}
                rating={prod.rating}
                price={prod.price}
                thumbnail={prod.thumbnail}
                title={prod.title}
                key={prod.id}
              />
            </>
          );
        })
      ) : (
        <div className="emptywishlist">
          <p>Your Wishlist is empty</p>
          <Link to="/">
            <button className="btn-primary">Contiue to Shopping</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
