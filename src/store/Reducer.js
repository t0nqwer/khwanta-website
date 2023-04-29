import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  heros: [],
  data: null,
  loading: false,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addproduct: (state, action) => {
      state.products = action.payload;
    },
    addheros: (state, action) => {
      state.heros = action.payload;
    },
    adddata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addproduct, addheros, adddata } = productSlice.actions;
export default productSlice.reducer;
