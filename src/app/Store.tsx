import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/CartSlices";
import FilterReducer from "./slices/FilterSlices";
import mainSliceReducer from "./slices/products";
import searchReducer from "./slices/SearchSlice";

export const Store = configureStore({
  reducer: {
    main: mainSliceReducer,
    cart: cartReducer,
    filter: FilterReducer,
    search: searchReducer,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
