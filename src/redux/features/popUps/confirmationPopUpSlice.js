"use client";
import { createSlice } from "@reduxjs/toolkit";

const confirmationPopUpSlice = createSlice({
  name: "confirmationPopUp",
  initialState: {
    displayPopUp: false,
  },

  reducers: {
    displayConfirmationPopUp: (state) => {
      state.displayPopUp = true;
    },
    hideConfirmationPopUp: (state) => {
      state.displayPopUp = false;
    },
  },
});

export const { displayConfirmationPopUp, hideConfirmationPopUp } =
  confirmationPopUpSlice.actions;
export default confirmationPopUpSlice.reducer;
