"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/store/bookingApi";

export default function Home() {
  const [bookings, setBookings] = useState([]);
  const { data, isLoading, error } = useGetBookingsQuery();

  useEffect(() => {
    if (data) {
      setBookings(data);
    }
  }, [data]);

  console.log("isLoading",isLoading);
  console.log("error",error);

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