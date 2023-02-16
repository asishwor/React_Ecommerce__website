import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlices";
// import AllproductsSlices from "./slices/AllproductsSlices";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    // allProducts: AllproductsSlices,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
