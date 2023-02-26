import Advertisement from "../components/Advertisement";
import Banner from "../components/Banner";
import Filter from "../components/filter/Filter";
import Items from "../components/items/Items";
import Recommended from "../components/items/Recommended";
import CatagoryCompo from "../components/products/CategoryCompo";
import { DataProps } from "../components/customHooks/UseFetch";

import { useSelector } from "react-redux";
import { RootState } from "../app/Store";

const Home = ({ prod }: DataProps) => {
  const data = useSelector((store: RootState) => store.main.data);

  return (
    <>
      <Banner />
      <Filter />
      <div className="container">
        <div className="items">
          <Items prod={data} />
        </div>
      </div>
      <Advertisement />
      {/* <Recommended prod={prod} /> */}
      <CatagoryCompo />
    </>
  );
};

export default Home;
