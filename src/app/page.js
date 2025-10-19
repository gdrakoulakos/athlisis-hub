"use client";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/store/bookingApi";

export default function Home() {
  const { data, isLoading, error } = useGetBookingsQuery();
  const newBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Pending")
    : [];
  const acknowledgedBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Acknowledged")
    : [];
  console.log("acknowledgedBookings", acknowledgedBookings);
  console.log("data", data);

  return (
    <div className={styles.homePageSection}>
      {newBookings.length > 0 && (
        <RequestsOverview
          title={"New Bookings"}
          status={"Pending"}
          bookings={newBookings || []}
        />
      )}
      <RequestsOverview
        title={"Acknowledged"}
        status={"Acknowledged"}
        bookings={data || []}
      />
      <ButtonReserveCourt />
    </div>
  );
}
