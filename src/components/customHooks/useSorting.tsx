import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/Store";
import { ProdTypes } from "./UseFetch";
import { SET_FILTER } from "../../app/slices/FilterSlices";

const useSorting = () => {
  const data = useSelector((store: RootState) => store.cart.allProducts);
  const dispatch = useDispatch();
  const [sortedData, setSortedData] = useState<ProdTypes[]>([]);

  const { category, brand } = useParams();
  const {} = useSelector((store: RootState) => store.filter);

  async function setFilter() {
    setSortedData(data.filter((el) => el.category === category));
    dispatch(SET_FILTER(sortedData));
    console.log("hello", sortedData, data);
  }

  useEffect(() => {
    setFilter();
  }, [category, data]);
};

export default useSorting;
