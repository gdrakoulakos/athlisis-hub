"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "./api/bookingApi";
import bookingsReducer from "@/redux/features/bookingsSlice";
import confirmationPopUpReducer from "@/redux/features/popUps/displayConfirmationPopUpSlice";

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
    bookings: bookingsReducer,
    popUp: confirmationPopUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});
