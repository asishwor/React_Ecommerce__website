import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/Store";
import { FETCH_DATA } from "../../app/slices/CartSlices";

export interface ProdTypes {
  id: number;
  title: string;
  description?: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock?: number;
  brand: string;
  category: string;
  thumbnail: string;
  images?: string[];
}
export type DataProps = {
  prod: ProdTypes[];
};

function usefetch() {
  // const [data, setData] = useState<ProdTypes[]>([]);
  const allData = useSelector((store: RootState) => {
    store.cart.allProducts;
  });
  const dispatch = useDispatch();
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function dataFetch() {
    try {
      const data = await (await fetch("https://dummyjson.com/products")).json();
      setIsLoading(false);
      dispatch(FETCH_DATA(data.products));
      console.log("fetched");
    } catch (error) {
      setError(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return dataFetch;
}
export default usefetch;
