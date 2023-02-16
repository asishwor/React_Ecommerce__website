import { createSlice } from "@reduxjs/toolkit";
import Products, { ProdTypes } from "../../components/items/Products";

type AllProdSlice = {
  allProducts: ProdTypes[];
};
// // create products slices

// const prod = Products();
// const initialState: AllProdSlice = {
// //   allProducts: prod.prod,
// };
// const AllProducts = createSlice({
//   name: "allProducts",
// //   initialState,
//   reducers: {},
// });

// export default AllProducts.reducer;
