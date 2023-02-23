import { createSlice } from "@reduxjs/toolkit";
import { ProdTypes } from "../../components/customHooks/UseFetch";

const initialState = {
  search: "",
};
const SearchReducer = createSlice({
  name: "search",
  initialState,
  reducers: {
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { search } = SearchReducer.actions;
export default SearchReducer.reducer;
