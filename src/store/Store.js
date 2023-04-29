import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Reducer";
import menuactiveSlice from "./Menu";

export default configureStore({
  reducer: {
    products: productSlice,
    menuActive: menuactiveSlice,
  },
});
