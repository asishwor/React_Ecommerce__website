import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";
import Aside from "../components/Aside";
import { ProdTypes } from "../components/customHooks/UseFetch";
import Items from "../components/items/Items";
import "../assets/css/_searchPage.scss";
import Category from "./Category";

const SearchPage = () => {
  const searchName = useSelector((store: RootState) => store.search.search);
  const prod = useSelector((store: RootState) => store.main.data);
  const [sortedData, setSortedData] = useState<ProdTypes[]>([]);
  useEffect(() => {
    function sort() {
      setSortedData(
        prod.filter((el) =>
          el.title.toLocaleLowerCase().includes(searchName.toLocaleLowerCase())
        )
      );
    }
    sort();
    console.log(Array());
  }, [searchName]);
  return (
    <>
      <section>
        <div className="container">
          <div className="searchPage">
            <Aside />

            <div className="right">
              <p className="filter">
                {sortedData.length} items found on "{searchName}"
              </p>

              <div className="items">
                <Items prod={sortedData} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
