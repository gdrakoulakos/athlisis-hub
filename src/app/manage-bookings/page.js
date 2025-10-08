"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

export default function ManageBookings() {
  const bookings = useSelector((state) => state.bookings.list);

  console.log("bookings", bookings);

  return (
    <div className={styles.manageBookingsContainer}>
      <h2>Manage Bookings</h2>
    </div>
  );
}
