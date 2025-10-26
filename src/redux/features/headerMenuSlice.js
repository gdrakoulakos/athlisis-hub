import { createSlice } from "@reduxjs/toolkit";

const headerMenuSlice = createSlice({
  name: "headerMenu",
  initialState: {
    displayHeaderMenu: false,
  },
  reducers: {
    hideHeaderMenu: (state) => {
      state.displayHeaderMenu = false;
    },
    toggleHeaderMenu: (state) => {
      state.displayHeaderMenu = !state.displayHeaderMenu;
    },
  },
});

export const { toggleHeaderMenu, hideHeaderMenu } = headerMenuSlice.actions;
export default headerMenuSlice.reducer;
