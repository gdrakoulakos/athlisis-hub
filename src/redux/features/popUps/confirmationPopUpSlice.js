"use client";
import { createSlice } from "@reduxjs/toolkit";

const confirmationPopUpSlice = createSlice({
  name: "confirmationPopUp",
  initialState: {
    displayPopUp: false,
    message: "",
  },

  reducers: {
    displayConfirmationPopUp: (state, action) => {
      state.displayPopUp = true;
      state.message = action.payload || "";
    },
    hideConfirmationPopUp: (state) => {
      state.displayPopUp = false;
      state.message = "";
    },
  },
});

export const { displayConfirmationPopUp, hideConfirmationPopUp } =
  confirmationPopUpSlice.actions;
export default confirmationPopUpSlice.reducer;
