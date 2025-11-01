"use client";
import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";
import { useGetBookingsQuery } from "@/redux/api/bookingApi";
import { useEffect } from "react";
import { motion } from "motion/react";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

export default function Home() {
  const { data, isLoading, error, refetch } = useGetBookingsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const newBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Pending")
    : [];
  const acknowledgedBookings = Array.isArray(data)
    ? data.filter((booking) => booking.status === "Acknowledged")
    : [];

  if (error) return <p>Failed to load bookings.</p>;

  return (
    <div className={styles.homePageSection}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <motion.div
          className={styles.bookingCategoriesContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {newBookings.length > 0 && (
            <RequestsOverview
              title={"New Bookings"}
              status={"Pending"}
              bookings={newBookings}
            />
          )}
          <RequestsOverview
            title={"Acknowledged"}
            status={"Acknowledged"}
            bookings={acknowledgedBookings}
          />
          <ButtonReserveCourt />
        </motion.div>
      )}
    </div>
  );
}
