import { useEffect, useState } from "react";
import usefetch from "./UseFetch";
import usefetchCatagory from "./useFetchCatagory";

const useCataThumb = () => {
  const { data, isLoading, error } = usefetch();
  const catagory = usefetchCatagory();
  const [catThumb, setCatThumb] = useState<string[]>();

  function getThumbnail() {
    let cata: string[] = [];

    catagory.map((cat) => {
      cata.push(data.filter((el) => el.category == cat)[1].thumbnail);
    });

    setCatThumb(cata);
  }

  useEffect(() => {
    getThumbnail();
  }, [data]);

  return catThumb;
};

export default useCataThumb;
