import { createSlice } from "@reduxjs/toolkit";
const initialState = { IsActive: false };

const menuactiveSlice = createSlice({
  name: "menuactive",
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.IsActive = action.payload;
    },
  },
});
export const { setMenu } = menuactiveSlice.actions;
export default menuactiveSlice.reducer;
