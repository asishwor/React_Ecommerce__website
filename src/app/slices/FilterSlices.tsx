import { createSlice } from "@reduxjs/toolkit";
import { ProdTypes } from "../../components/customHooks/UseFetch";

type FilterSliceTypes = {
  brands: ProdTypes[];
  rating: number;
};

const filterState: FilterSliceTypes = {
  brands: [],
  rating: 0,
};
const FilterSlice = createSlice({
  name: "createSlice",
  initialState: filterState,
  reducers: {},
});
