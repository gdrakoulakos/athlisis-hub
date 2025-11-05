import { createSlice } from "@reduxjs/toolkit";

const resultPopUpSlice = createSlice({
  name: "resultPopUp",
  initialState: {
    displayPopUp: false,
    message: "",
  },
  reducers: {
    displayResultPopUp: (state, action) => {
      state.displayPopUp = true;
      state.message = action.payload || "";
    },
    hideResultPopUp: (state) => {
      state.displayPopUp = false;
      state.message = "";
    },
  },
});

export const { displayResultPopUp, hideResultPopUp } = resultPopUpSlice.actions;
export default resultPopUpSlice.reducer;
