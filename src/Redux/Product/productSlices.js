import { createSlice } from "@reduxjs/toolkit"; 

const initialState = [
  {
    pname: "Jacket",
    price: 45,
    image: require("../../assets/images/shop/shop-1.jpg"),
  },
  {
    pname: "Shoes",
    price: 60,
    image: require("../../assets/images/shop/shop-2.jpg"),
  },
  {
    pname: "Watch",
    price: 120,
    image: require("../../assets/images/shop/shop-3.jpg"),
  },
  {
    pname: "Bag",
    price: 80,
    image: require("../../assets/images/shop/shop-4.jpg"),
  },
  {
    pname: "Sunglasses",
    price: 50,
    image: require("../../assets/images/shop/shop-5.jpg"),
  },
];

const productSlice = createSlice({
    name: 'product',
    initialState
})

export default productSlice