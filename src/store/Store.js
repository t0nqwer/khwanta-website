import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducer";

export default configureStore({
  reducer: {
    products: productSlice,
  },
});
