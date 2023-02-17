import { useEffect, useState } from "react";
import usefetch from "./UseFetch";

export default function usefetchCatagory() {
  const { data, isLoading, error } = usefetch();
  const [catagories, setCatagories] = useState<string[]>([]);

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
