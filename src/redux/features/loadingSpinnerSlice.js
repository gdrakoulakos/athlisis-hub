"use client";
import { createSlice } from "@reduxjs/toolkit";

const loadingSpinnerSlice = createSlice({
  name: "loadingSpinner",
  initialState: {
    loadingSpinner: false,
  },
  reducers: {
    displayLoadingSpinner: (state) => {
      state.loadingSpinner = true;
    },
    hideLoadingSpinner: (state) => {
      state.loadingSpinner = false;
    },
  },
});

export const { displayLoadingSpinner, hideLoadingSpinner } =
  loadingSpinnerSlice.actions;
export default loadingSpinnerSlice.reducer;
