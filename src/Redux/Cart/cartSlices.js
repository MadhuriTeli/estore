import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartItem: [],
    totalItemPrice: 0,
    totalItems: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let item_exists = state.cartItem.find(
        (item) => item.id === action.payload.id
      );
      state.cartItem = [...state.cartItem, action.payload];
      state.totalQuantity = ++state.totalQuantity;
      state.totalItemPrice = state.totalItemPrice+action.payload.price;
      if (!item_exists) {
        state.totalItems = ++state.totalItems;
      }
    },
  },
});
export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;