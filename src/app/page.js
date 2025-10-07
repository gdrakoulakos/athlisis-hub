"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/store/bookingApi";

export default function Home() {
  const [bookings, setBookings] = useState([]);
  const { data, isLoading, error } = useGetBookingsQuery();

  console.log("data", data);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/bookings");
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchData();
  }, []);

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
