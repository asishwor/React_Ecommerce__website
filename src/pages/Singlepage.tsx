import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import usefetch from "../components/customHooks/UseFetch";
import StarRating from "../components/items/StarRating";

const Singlepage = () => {
  const { productTitle } = useParams();
  const { data, isLoading, error } = usefetch();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);
  const [count, setCount] = useState<number>(1);

  const singleProd = {
    ...data.find((el) => {
      return el.title.toLowerCase() == productTitle?.toLocaleLowerCase();
    }),
  };

  const onCount = (num: number) => {
    if (stock) {
      if (count >= 1 && (count < stock || num < 0)) {
        setCount((c) => (c += num));
      } else {
        setCount(1);
      }
    }
  };

  const {
    title,
    thumbnail,
    description,
    price,
    images,
    rating,
    id,
    brand,
    category,
    stock,
    discountPercentage,
  } = singleProd;

  return (
    <section>
      <div className="container">
        <div className="singlePage">
          <div className="singlePage__thumbnail">
            <img src={src || thumbnail} alt="" />
            <div className="images" ref={sliderRef}>
              {/* <span></span> */}
              {images?.map((el, i) => {
                return (
                  <img
                    key={i}
                    src={el}
                    alt=""
                    onClick={(e) => {
                      let src = (e.target as HTMLElement).getAttribute("src");
                      setSrc(src);
                    }}
                  />
                );
              })}
              {/* <span></span> */}
            </div>
          </div>

          <div className="singlePage__content">
            <div className="title__content">
              <div className="title">
                <h2>{title}</h2>
              </div>
              <p className="description">{description}</p>
              <StarRating star={rating} />
            </div>
            <div className="price">
              <div>
                <span className="realPrice">Price : रु {price}</span>
                <span> -{discountPercentage}%</span>
              </div>
              <span className="discount">
                रु :
                {discountPercentage && price
                  ? price - (price * discountPercentage) / 100
                  : price}
                %
              </span>
            </div>
            {/* cart Count */}
            <div className="cart__counter">
              <div>
                <button className="increase" onClick={() => onCount(1)}>
                  +
                </button>
                <span className="count">{count}</span>
                <button className="decrease" onClick={() => onCount(-1)}>
                  -
                </button>
              </div>
              <p>
                only <span>{stock} items</span> left! Don't miss it
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singlepage;
