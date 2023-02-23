import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ASC,
  DESC,
  SET_FILTER,
  DEFAULT_SORTING,
} from "../app/slices/FilterSlices";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/Store";
import CatagoryCompo from "../components/products/CatagoryCompo";
import Items from "../components/items/Items";
import Aside from "../components/Aside";

const Category = () => {
  const data = useSelector((store: RootState) => store.cart.allProducts);
  const [isGrid, setIsGrid] = useState(true);
  const { maxVal, minVal, rating, brands, toHigh, toLow, sortedData } =
    useSelector((store: RootState) => store.filter);
  const dispatch = useDispatch();
  const { category, brand } = useParams();
  const [catagoryList, setCatagoytList] = useState<string[]>([]);
  const [toggleSorting, setSortingToggle] = useState(false);

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
          <Aside />
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
              <Items prod={sortedData} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
