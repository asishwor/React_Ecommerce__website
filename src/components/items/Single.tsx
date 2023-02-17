import React, { useState } from "react";
import "../../assets/css/items.scss";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
} from "../../app/slices/CartSlices";
import { RootState } from "../../app/Store";
import { ProdTypes } from "../customHooks/UseFetch";
interface SingPropsType extends ProdTypes {
  elm: ProdTypes;
}
const Single = ({
  category,
  elm,
  thumbnail,
  title,
  price,
  brand,
  rating,
  id,
  description,
}: SingPropsType) => {
  // cart from redux store
  const dispatch = useDispatch();

  const [isFavourite, setIsfavourite] = useState<boolean>(false);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  return (
    <Link to={`/products/${id}/${title}`}>
      <div
        className="card"
        onDoubleClick={(e) => {
          e.stopPropagation();
          setIsfavourite(true);
        }}
      >
        <div className="card__image">
          <img src={thumbnail} alt={title} />
        </div>
        <span
          className="like-tag"
          onClick={(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
            e.stopPropagation();
            if (isFavourite) {
              dispatch(REMOVE_FROM_FAVOURITE(elm));
              confirm("This item removed from your wishlist");
            } else {
              dispatch(ADD_TO_FAVOURITE(elm));
              alert("This item added to your  wishlist");
            }
            setIsfavourite(!isFavourite);
          }}
        >
          <img
            src="/images/favourite1.png"
            alt="favourite__icon"
            className={!isFavourite ? "active" : ""}
          />
          <img
            className={isFavourite ? "active" : ""}
            src="/images/favourite.png"
            alt="favourite__icon"
          />
        </span>
        <div className="card__content">
          <div className="card__heading">
            <Link to={`/products/${id}/${title}`}>
              <h4>{title.slice(0, 20)}</h4>
            </Link>
            <span className="price">
              रु{price}
              .00
            </span>
          </div>
          <p className="card__excerpt">{description?.slice(0, 40)}...</p>
          <div className="card__ratingStar">
            <StarRating star={rating} />
          </div>
        </div>
        <div className="card__btn">
          {isAddedToCart && (
            <button
              className="btn-primary"
              onClick={() => {
                setIsAddedToCart(false);
                alert("This item removed from cart");

                dispatch(REMOVE_FROM_CART(elm));
              }}
            >
              Remove From Cart
            </button>
          )}
          {!isAddedToCart && (
            <button
              className="btn-secondary"
              onClick={() => {
                setIsAddedToCart(true);
                alert("This item added to cart");

                dispatch(ADD_TO_CART(elm));
              }}
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Single;
