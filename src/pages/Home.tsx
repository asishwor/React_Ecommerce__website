import Advertisement from "../components/Advertisement";
import Banner from "../components/Banner";
import Filter from "../components/filter/Filter";
import Items from "../components/items/Items";
import Recommended from "../components/items/Recommended";
import CatagoryCompo from "../components/products/CatagoryCompo";

const Home = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Items />
      <Advertisement />
      <Recommended />
      <CatagoryCompo />
    </>
  );
};

export default Home;
