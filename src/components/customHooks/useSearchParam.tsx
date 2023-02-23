import { useState } from "react";

export type SearchParam = {
  max?: number;
  min?: number;
  price?: string;
};

export default function useSearchParams() {
  const [searchParam, setSearchParam] = useState<SearchParam>();
  const url = window.location;
  //   const url = new URL(ur.href);
  let params = new URLSearchParams(url.search);
  console.log(params);
  console.log(params.append("foo", "ishwor"));
}
