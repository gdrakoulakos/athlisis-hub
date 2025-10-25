import { createSlice } from "@reduxjs/toolkit";

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [],
  },
  reducers: {
    setBooking: (state, action) => {
      state.list = action.payload;
    },
    removeBooking: (state, action) => {
      const { id } = action.payload;
      state.list = state.list.filter((item) => item.id !== id);
    },
  },
});

export const { setBooking, removeBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
