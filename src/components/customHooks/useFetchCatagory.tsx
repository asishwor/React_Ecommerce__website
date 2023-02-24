import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/Store";

export default function usefetchCatagory() {
  const [catagories, setCatagories] = useState<string[]>([]);
  const data = useSelector((state: RootState) => {
    return state.main.data;
  });

  async function findCata() {
    let cata: string[] = [];
    data.map((el) => {
      cata.push(el.category);
    });
    setCatagories([...new Set(cata)]);
  }

  useEffect(() => {
    findCata();
  }, [data]);
  console.log(catagories);

  return catagories;
}
