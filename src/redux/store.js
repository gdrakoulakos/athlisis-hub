"use client";
import { configureStore } from "@reduxjs/toolkit";
import { bookingApi } from "./api/bookingApi";
import bookingsReducer from "@/redux/features/bookingsSlice";
import confirmationPopUpReducer from "@/redux/features/popUps/confirmationPopUpSlice";
import resultPopUpReducer from "@/redux/features/popUps/resultPopUpSlice";
import headerMenuReducer from "@/redux/features/headerMenuSlice";

export const store = configureStore({
  reducer: {
    [bookingApi.reducerPath]: bookingApi.reducer,
    bookings: bookingsReducer,
    confirmationPopUp: confirmationPopUpReducer,
    resultPopUp: resultPopUpReducer,
    headerMenu: headerMenuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookingApi.middleware),
});
