import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "cartItem",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: state.cartItems.filter((item, i) => i !== action.payload),
      };
    },
    clearCart: (state, action) => {
      return {
        ...state,
        cartItems: [],
      };
    },
    updateCart: (state, action) => {
      let updatedCartItems = [...state.cartItems];
      updatedCartItems[action.payload.index] = action.payload.item;
      console.log(updatedCartItems[action.payload.index]);
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    },
  },
});

export default cartItem.reducer;
export const { addToCart, removeFromCart, clearCart, updateCart } =
  cartItem.actions;
