import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FILTER_WITH_PRICE,
  FILTER_WITH_RATINGS,
  max,
  min,
} from "../app/slices/FilterSlices";
import { RootState } from "../app/Store";

const Aside = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category, brand } = useParams();

  const { maxVal, minVal, rating, brands, toHigh, toLow, sortedData } =
    useSelector((store: RootState) => store.filter);

  function getStar(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    dispatch(
      FILTER_WITH_RATINGS(Number((e.target as HTMLElement).dataset.star))
    );
  }

  function getMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(min(+e.target.value));
  }

  function getMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(max(+e.target.value));
  }

  return (
    <div className="category__filter">
      <h3>Category</h3>
      <p className="category__name">{category}</p>
      <div className="category__filter-brand">
        {/* filter with brands name  */}
        <h4>Brands</h4>
        <ul>
          {brands.map((el) => {
            return (
              <div className="brandlist" key={el}>
                <input
                  type="checkbox"
                  name={el}
                  id=""
                  onChange={(e) => {
                    navigate(`/category/${category}/brand-${e.target.name}`);
                  }}
                />
                <span className="brand__name">{el}</span>
              </div>
            );
          })}
        </ul>
      </div>

      {/* Filter with ratings */}
      <div className="category__filter-ratings">
        <Link to={`/category/${category}/?rating:${rating}`}>
          <span
            data-star="4.6"
            onClick={(e) => {
              getStar(e);
            }}
          >
                
          </span>
        </Link>
        <span data-star="3.5" onClick={(e) => getStar(e)}>
             <span></span>
          <span>And Up</span>
        </span>
        <span data-star="2.5" onClick={(e) => getStar(e)}>
            <span> </span>
          <span>And Up</span>
        </span>
        <span data-star="1.5" onClick={(e) => getStar(e)}>
           <span>  </span>
          <span>And Up</span>
        </span>
        <span data-star="1" onClick={(e) => getStar(e)}>
          <span>   </span>
          <span>And Up</span>
        </span>
      </div>

      <div className="category__filter-price">
        <h4>Price</h4>
        <div className="price">
          <form action="">
            <input
              type="number"
              className="min"
              placeholder="min"
              onChange={(e) => getMinPrice}
            />
            <span> - </span>
            <input
              type="number"
              className="min"
              placeholder="max"
              onChange={getMaxPrice}
            />

            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                dispatch(FILTER_WITH_PRICE("price"));
              }}
            >
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aside;
