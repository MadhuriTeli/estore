import { createSlice } from "@reduxjs/toolkit"

const initialState={
    cartItem: [],
    totalItemPrice: 0,
    totalItem: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers:{

    }
});

export default cartSlice.reducer;