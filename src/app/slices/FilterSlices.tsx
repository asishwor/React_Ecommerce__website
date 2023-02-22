import { createSlice } from "@reduxjs/toolkit";
import { ProdTypes } from "../../components/customHooks/UseFetch";

interface FilterState {
  rating: number;
  maxVal: number;
  brands: string[];
  minVal: number;
  toHigh: boolean;
  toLow: boolean;
  sortedData: ProdTypes[];
}
const filterState: FilterState = {
  rating: 0,
  sortedData: [],
  brands: [],
  maxVal: 0,
  minVal: 0,
  toHigh: false,
  toLow: false,
};
const FilterSlice = createSlice({
  name: "sort",
  initialState: filterState,
  reducers: {
    ASC: (state, action) => {
      state.toHigh = true;
      state.toLow = false;
      state.sortedData = state.sortedData.sort(
        ({ price: a }, { price: b }) => a - b
      );
    },
    DESC: (state, action) => {
      state.toLow = true;
      state.toHigh = false;

      state.sortedData = state.sortedData.sort(
        ({ price: a }, { price: b }) => b - a
      );
    },
    DEFAULT_SORTING: (state) => {
      state.toLow = false;
      state.toHigh = false;
      state.sortedData = state.sortedData.sort(
        ({ rating: a }, { rating: b }) => a - b
      );
    },
    max: (state, action) => {
      state.maxVal = action.payload;
    },

    min: (state, action) => {
      state.minVal = action.payload;
    },

    FILTER_WITH_PRICE: (state, action) => {
      state.sortedData = state.sortedData.filter(
        (el) => el.price > state.minVal && el.price < state.maxVal
      );
    },

    FILTER_WITH_RATINGS: (state, action) => {
      state.rating = action.payload;
      state.sortedData = state.sortedData.filter(
        (el) => el.rating > state.rating
      );
    },

    SET_FILTER: (state, action) => {
      state.sortedData = action.payload;
      state.brands = [...new Set([...state.sortedData.map((el) => el.brand)])];
    },
  },
});

export const {
  ASC,
  DESC,
  FILTER_WITH_RATINGS,
  max,
  min,
  SET_FILTER,
  FILTER_WITH_PRICE,
  DEFAULT_SORTING,
} = FilterSlice.actions;
export default FilterSlice.reducer;
