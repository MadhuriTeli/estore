import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlices.js";



export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
  },
});