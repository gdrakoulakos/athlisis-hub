import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookingApi = createApi({
  reducerPath: "bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "", 
  }),
  endpoints: (builder) => ({
    getBookings: builder.query({
      query: () => "/api/bookings",
    }),
  }),
});

export const { useGetBookingsQuery } = bookingApi;
