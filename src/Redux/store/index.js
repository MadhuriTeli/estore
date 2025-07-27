import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlices.js";
import productSlice from "../Product/productSlices.js";
import cartSlice from '../Cart/cartSlices';



export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    productReducer: productSlice,
    cartReducer: cartSlice,
  },
});