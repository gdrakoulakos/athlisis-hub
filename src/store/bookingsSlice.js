import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [],
  },
  reducers: {
    setBookings: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setBookings } = bookingsSlice.actions;
export default bookingsSlice.reducer;
