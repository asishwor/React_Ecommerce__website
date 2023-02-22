import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/Store";
import Single from "./items/Single";

const InnerFilter = () => {
  const data = useSelector((store: RootState) => store.filter.sortedData);
  const [getSearch, setGetSearch] = useState<string | null>(null);
  const { category, brand } = useParams();
  const navigate = useNavigate();

  function getParams() {
    let url = new URLSearchParams(window.location.search);
    setGetSearch(url.get("brand"));
    console.log(getSearch);
  }
  useEffect(() => {
    getParams();
    console.log("ininercategory");
  }, [getSearch]);

  return (
    <section className="innerFilter__section">
      <div className="container">
        <div className="innerFilter">
          <div className="innerFilter__left">
            <div className="category__filter">
              <h3>Category</h3>
              <p className="category__name">{category}</p>
              <div className="category__filter-brand">
                <p>Brand</p>
                <input
                  type={"checkbox"}
                  id="brand"
                  onChange={() => navigate("/catagory/" + category)}
                  checked
                />
                <label htmlFor="brand"> {brand}</label>
              </div>

              {/* Filter with ratings */}
              <div className="category__filter-ratings">
                <span data-star="5">    </span>
                <span data-star="4">
                     <span></span>
                  <span>And Up</span>
                </span>
                <span data-star="3">
                    <span> </span>
                  <span>And Up</span>
                </span>
                <span data-star="2">
                   <span>  </span>
                  <span>And Up</span>
                </span>
                <span data-star="1">
                  <span>   </span>
                  <span>And Up</span>
                </span>
              </div>

              <div className="category__filter-price">
                <h4>Price</h4>
                <div className="price">
                  <input type="number" className="min" placeholder="min" />
                  <span> - </span>
                  <input type="number" className="min" placeholder="max" />
                  <Link to={"/category/"}>
                    <button></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="category__right">
            {/* category Info */}
            <div className="category__head">
              {/* sorting with price and  view grid and list */}
              <h4>{`${brand}  ${category} at Best Price in Nepal`} </h4>
              <div className="category__view">
                <p>
                  Showing Result for
                  <Link to={"#"} className="brand">
                    {getSearch}
                  </Link>
                </p>
              </div>
              <p className="filter__tags">
                <span>Filtered By:</span>
              </p>
            </div>
            <div className="items">
              {data
                .filter(
                  (prod) => prod.category == category && prod.brand == brand
                )
                .map((prod) => {
                  const {
                    brand,
                    id,
                    category,
                    price,
                    rating,
                    thumbnail,
                    title,
                    description,
                    discountPercentage,
                    images,
                  } = prod;
                  return (
                    <Single
                      category=""
                      discountPercentage={discountPercentage}
                      brand=""
                      key={id}
                      elm={prod}
                      id={id}
                      price={price}
                      rating={rating}
                      thumbnail={thumbnail}
                      title={title}
                      description={description}
                      images={images}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerFilter;
