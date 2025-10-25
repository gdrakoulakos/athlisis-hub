import { createSlice } from "@reduxjs/toolkit";

const resultPopUpSlice = createSlice({
  name: "resultPopUp",
  initialState: {
    displayPopUp: false,
  },
  reducers: {
    displayResultPopUp: (state) => {
      state.displayPopUp = true;
    },
    hideResultPopUp: (state) => {
      state.displayPopUp = false;
    },
  },
});

export const { displayResultPopUp, hideResultPopUp } = resultPopUpSlice.actions;
export default resultPopUpSlice.reducer;
