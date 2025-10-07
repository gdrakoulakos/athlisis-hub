"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "./bookingApi";

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});
