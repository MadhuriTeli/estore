import { createSlice } from "@reduxjs/toolkit";

const initialState= ["Men" , "Women", "Kids", "Best Of offer", "All"]
 const categorySlice = createSlice({
    name: 'category',
    initialState
})
export default categorySlice;