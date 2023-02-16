import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usefetch, { ProdTypes } from "./UseFetch";

export default function useBrandList() {
  const { data, isLoading, error } = usefetch();
  const [brandList, setBrandList] = useState<string[]>([]);
  const { id } = useParams();

  useEffect(() => {
    // Function for set unique brand catagory wise

    async function setBrand() {
      const brands: string[] = [];
      await data
        .filter((d) => d.category === id)
        .map((e) => brands.push(e.brand));
      await setBrandList([...new Set(brands)]);
    }

    setBrand();
    // set dependecies array to render component on change of this value first time render on the basiis of data and next time render on changes of the catagory
  }, [data, id]);

  return brandList;
}
