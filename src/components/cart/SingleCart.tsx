import { ProdTypes } from "../items/Products";
import StarRating from "../items/StarRating";
const SingleCart = ({ title, thumbnail, rating, price }: ProdTypes) => {
  return (
    <div className="item">
      <div className="item__image">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="item__title">
        <h4>{title}</h4>
      </div>
      <div className="item__count">
        <span></span>
      </div>
      <div className="rating">
        <StarRating star={rating} />
      </div>
      <div className="item__price">$ {price}</div>
    </div>
  );
};

export default SingleCart;
