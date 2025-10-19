"use client";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/store/bookingApi";

export default function Home() {
  const { data, isLoading, error } = useGetBookingsQuery();

  return (
    <div className={styles.homePageSection}>
      <RequestsOverview
        title={"New Bookings"}
        status={"Pending"}
        bookings={data || []}
      />
      <RequestsOverview
        title={"Acknowledged"}
        status={"Acknowledged"}
        bookings={data || []}
      />
      <ButtonReserveCourt />
    </div>
  );
}
