"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "./bookingApi";
import bookingsReducer from "@/store/bookingsSlice";

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
    bookings: bookingsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});
