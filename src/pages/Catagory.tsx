import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataProps } from "../components/customHooks/UseFetch";
import Single from "../components/items/Single";
import {
  ASC,
  DESC,
  FILTER_WITH_RATINGS,
  FILTER_WITH_PRICE,
  max,
  SET_FILTER,
  DEFAULT_SORTING,
  min,
} from "../app/slices/FilterSlices";
import { connect, useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/Store";
import CatagoryCompo from "../components/products/CatagoryCompo";

const category = ({ prod }: DataProps) => {
  const data = prod;
  const [isGrid, setIsGrid] = useState(true);
  const { maxVal, minVal, rating, brands, toHigh, toLow, sortedData } =
    useSelector((store: RootState) => store.filter);
  const dispatch = useDispatch();
  const { category, brand } = useParams();
  const navigate = useNavigate();
  const [catagoryList, setCatagoytList] = useState<string[]>([]);

  function getStar(e: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
    dispatch(FILTER_WITH_RATINGS((e.target as HTMLElement).dataset.star));
  }

  const [toggleSorting, setSortingToggle] = useState(false);
  // get max price avlue
  function getMinPrice(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(min(+e.target.value));
  }

  function getMaxPrice(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch(max(+e.target.value));
  }
  // Routing for filter

  async function onfilterByBrand(
    e: any,
    paramName: string,
    paramValue: number | string | undefined
  ) {
    const url = await window.location.href;
    const param = await new URLSearchParams(url);
    const newParam = await param.append("rating", rating.toString());
    await param.set("rating", rating.toString());
    navigate(`${paramName}=${paramValue}`);
    // console.log(url, param.for(const [key,value] of search));
  }

  function filterItems() {
    dispatch(SET_FILTER(data.filter((el) => el.category == category)));
  }

  // get set catagory list & render page on chenges
  useEffect(() => {
    filterItems();
    sortedData.map((el) => setCatagoytList([...catagoryList, el.brand]));
  }, [category, data, brand, rating, maxVal]);

  return (
    <section className="category__section">
      <div className="container">
        {/* catagory with images */}
        {<CatagoryCompo />}

        <div className="category">
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
                          onfilterByBrand(e, e.target.name, category);
                          navigate(`/category/${category}/${e.target.name}`);
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
              <span
                data-star="4.5"
                onClick={(e) => {
                  getStar;
                  onfilterByBrand(e, "rating", rating);
                }}
              >
                    
              </span>
              <span data-star="3.5" onClick={getStar}>
                   <span></span>
                <span>And Up</span>
              </span>
              <span data-star="2.5" onClick={getStar}>
                  <span> </span>
                <span>And Up</span>
              </span>
              <span data-star="1.5" onClick={getStar}>
                 <span>  </span>
                <span>And Up</span>
              </span>
              <span data-star="1" onClick={getStar}>
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

          <div className="category__right">
            {/* category Info */}
            <div className="category__head">
              <div className="category__info">
                <h4>{category}</h4>
                <p>
                  {sortedData.length}
                  -items found in {category}
                </p>
              </div>
              {/* sorting with price a
              nd  view grid and list */}
              <div className="category__view">
                <div className="sorting__price">
                  <span> Sort By :</span>
                  <li
                    onClick={() => setSortingToggle(!toggleSorting)}
                    className={`${toggleSorting ? "active" : ""}`}
                  >
                    <div>
                      <span>
                        {toHigh && !toLow
                          ? "Price Low To High"
                          : toLow && !toHigh
                          ? " Price High To Low"
                          : "Best Matched"}
                      </span>
                      <span></span>
                    </div>
                    <ul>
                      <li onClick={() => dispatch(DEFAULT_SORTING())}>
                        Best Matched
                      </li>
                      <li onClick={(e) => dispatch(ASC(e))}>
                        Price Low To High
                      </li>
                      <li onClick={(e) => dispatch(DESC(e))}>
                        Price High To Low
                      </li>
                    </ul>
                  </li>
                </div>
                {/* View grid view and list view */}
                <div className="list__item">
                  <span>View : </span>
                  <div>
                    <span
                      style={
                        isGrid
                          ? { color: "var(--primary-color)" }
                          : { color: "var(--body-font-color)" }
                      }
                      className="grid"
                      onClick={() => setIsGrid(true)}
                    >
                      
                    </span>
                    <span
                      style={
                        !isGrid
                          ? { color: "var(--primary-color)" }
                          : { color: "var(--body-font-color)" }
                      }
                      className="list"
                      onClick={() => setIsGrid(false)}
                    >
                      
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${isGrid ? "items" : "items list"}`}>
              {/* {isLoading && <span className="loading"></span>} */}
              {sortedData.map((prod) => {
                const {
                  brand,
                  id,
                  category,
                  price,
                  rating,
                  thumbnail,
                  title,
                  discountPercentage,
                  description,
                  images,
                } = prod;
                return (
                  <Single
                    category=""
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
                    discountPercentage={discountPercentage}
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

export default category;
