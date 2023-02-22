import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../../app/Store";

export default function usefetchCatagory() {
  const [catagories, setCatagories] = useState<string[]>([]);
  const data = useSelector((state: RootState) => {
    return state.cart.allProducts;
  });

  async function findCata() {
    let cata: string[] = [];
    await data.map((el) => {
      cata.push(el.category);
    });
    await setCatagories([...new Set(cata)]);
  }

  useEffect(() => {
    findCata();
  }, [data]);

  return catagories;
}
