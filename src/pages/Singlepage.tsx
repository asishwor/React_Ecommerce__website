import { HTMLAttributes, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import usefetch from "../components/customHooks/UseFetch";
import Products from "../components/items/Products";
import StarRating from "../components/items/StarRating";

const Singlepage = () => {
  const { productTitle } = useParams();
  const { data, isLoading, error } = usefetch();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  const singleProd = {
    ...data.find((el) => {
      return el.title.toLowerCase() == productTitle?.toLocaleLowerCase();
    }),
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

  function slider() {
    let index = 3;
  }
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
            <div className="title">
              <h2>{title}</h2>
            </div>
            <p className="description">{description}</p>

            <StarRating star={rating} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singlepage;
