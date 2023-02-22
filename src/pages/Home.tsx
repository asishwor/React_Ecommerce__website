import Advertisement from "../components/Advertisement";
import Banner from "../components/Banner";
import Filter from "../components/filter/Filter";
import Items from "../components/items/Items";
import Recommended from "../components/items/Recommended";
import CatagoryCompo from "../components/products/CatagoryCompo";
import usefetch, { DataProps } from "../components/customHooks/UseFetch";

const Home = ({ prod }: DataProps) => {
  // const prod = usefetch();
  return (
    <>
      <Banner />
      <Filter />
      <Items prod={prod} />
      <Advertisement />
      <Recommended prod={prod} />
      <CatagoryCompo prod={prod} />
    </>
  );
};

export default Home;
