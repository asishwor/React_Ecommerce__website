import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlices";
import FilterReducer from "./slices/FilterSlices";
export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    filter: FilterReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
