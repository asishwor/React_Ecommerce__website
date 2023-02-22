import { createSlice } from "@reduxjs/toolkit";
import { ProdTypes } from "../../components/customHooks/UseFetch";

// state types
interface StateTypes {
  cart: ProdTypes[];
  favourite: ProdTypes[];
  allProducts: ProdTypes[];
  isAdded: boolean;
  amount: number;
}

// intial state
const initialState: StateTypes = {
  allProducts: [],
  cart: [],
  amount: 0,
  isAdded: false,
  favourite: [],
};

// Action type
export interface ActionType {
  types?: string;
  payload: ProdTypes;
}

// Create slice for cart and wishlist & cart alert
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Cart
    FETCH_DATA: (state, action) => {
      state.allProducts = action.payload;
    },

    ADD_TO_CART: (state, action: ActionType) => {
      state.cart = [
        ...state.cart.filter((el) => el.id !== action.payload.id),
        action.payload,
      ];
      state.isAdded = true;
      state.amount += 1;
    },

    REMOVE_FROM_CART: (state, action: ActionType) => {
      state.cart = state.cart.filter((cart) => action.payload.id !== cart.id);
      state.amount -= 1;
    },

    // Wishlist

    ADD_TO_FAVOURITE: (state, action: ActionType) => {
      state.favourite = [...state.favourite, action.payload];
    },

    REMOVE_FROM_FAVOURITE: (state, action: ActionType) => {
      state.favourite = [
        ...state.favourite.filter((el) => el.id !== action.payload.id),
      ];
    },

    // alert after product added to the cart
    ADD_CART_ALERT: (state) => {
      state.isAdded = true;
    },

    REMOVE_CART_ALERT: (state) => {
      state.isAdded = false;
    },
  },
});

// export actions
export const {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  ADD_CART_ALERT,
  REMOVE_CART_ALERT,
  FETCH_DATA,
} = cartSlice.actions;
export default cartSlice.reducer;
