import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  {
    category: "Men",
    items: ["coats", "Jackets", "PartyWear", "Shoes"],
  },
  {
    category: "Women",
    items: ["coats", "Jackets", "PartyWear", "Shoes"],
  },
  {
    category: "Kids",
    items: ["coats", "Jackets", "PartyWear", "Shoes"],
  }
];

const accordionSlice = createSlice({
    name: "accordion",
    initialState
})

export default accordionSlice;