import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store";
import { ProdTypes } from "../components/customHooks/UseFetch";
import Items from "../components/items/Items";

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
      console.log(searchName, prod);
      console.log(sortedData);
    }
    sort();
  }, [searchName]);
  return (
    <>
      <section>
        <div className="container">
          <div className="items">
            <Items prod={sortedData} />
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchPage;
