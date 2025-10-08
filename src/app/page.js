"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/store/bookingApi";
import { setBookings } from "@/store/bookingsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const { data, isLoading, error } = useGetBookingsQuery();
  const bookings = useSelector((state) => state.bookings.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setBookings(data));
    }
  }, [data]);

  return (
    <div className={styles.homePageSection}>
      <RequestsOverview
        title={"Notifications"}
        status={"Pending"}
        bookings={bookings}
      />
      <RequestsOverview
        title={"Upcomings"}
        status={"Acknowledged"}
        bookings={bookings}
      />
      <ButtonReserveCourt />
    </div>
  );
}
