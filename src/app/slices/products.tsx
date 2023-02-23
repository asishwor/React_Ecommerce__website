import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProdTypes } from "../../components/customHooks/UseFetch";
// middleware which use for async work
// action
export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
});
type InitialState = {
  data: ProdTypes[];
  isLoading: boolean;
  error: boolean;
};
const initialState: InitialState = {
  data: [],
  isLoading: false,
  error: false,
};

const mainSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchData.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});

export default mainSlice.reducer;
