import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    const res = await fetch("/api/bookings");
    if (!res.ok) throw new Error("Failed to fetch bookings");
    return res.json();
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState: {
    list: [],
    status: "idle",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.list = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchBookings.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setBooking, removeBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
