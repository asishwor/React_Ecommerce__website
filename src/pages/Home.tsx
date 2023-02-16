import Advertisement from "../components/Advertisement";
import Banner from "../components/Banner";
import Filter from "../components/filter/Filter";
import Items from "../components/items/Items";
import Recommended from "../components/items/Recommended";
import Catagory from "./Catagory";

const Home = () => {
  return (
    <>
      <Banner />
      <Filter />
      <Items />
      <Advertisement />
      <Recommended />
      <Catagory />
    </>
  );
};

export default Home;
