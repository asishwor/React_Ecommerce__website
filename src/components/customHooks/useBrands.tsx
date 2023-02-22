import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import usefetch, { ProdTypes } from "./UseFetch";

export default function useBrandList(
  id: string | undefined,
  data: ProdTypes[]
) {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    // Function for set unique brand catagory wise

    async function setBrand(id: string | undefined) {
      const brands: string[] = [];
      await data
        .filter((d) => d.category === id)
        .map((e) => brands.push(e.brand));
      await setBrandList([...new Set(brands)]);
    }

    setBrand(id);
    // set dependecies array to render component on change of this value first time render on the basiis of data and next time render on changes of the catagory
  }, [data, id]);

  return brandList;
}
