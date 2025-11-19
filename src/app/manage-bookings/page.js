"use client";
export const dynamic = "force-dynamic";

import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";
import ImageBookingType from "../components/ImageBookingType/ImageBookingType";
import ResultPopUp from "../components/popUps/ResultPopUp/ResultPopUp";
import {
  removeBooking,
  acknowledgeBooking,
} from "@/redux/features/bookingsSlice";
import { displayConfirmationPopUp } from "@/redux/features/popUps/confirmationPopUpSlice";
import { displayResultPopUp } from "@/redux/features/popUps/resultPopUpSlice";
import {
  displayLoadingSpinner,
  hideLoadingSpinner,
} from "@/redux/features/loadingSpinnerSlice";
import { useGetBookingsQuery } from "@/redux/api/bookingApi";
import { formatDate, formatDateAndTime } from "@/utils/date";
import { sortByStatusAndDate } from "@/utils/sort";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import ConfirmationPopUp from "../components/popUps/ConfirmationPopUp/ConfirmationPopUp";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { useSearchParams } from "next/navigation";

export default function ManageBookings() {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("bookingId");
  const dispatch = useDispatch();
  const [bookingDataToDelete, setBookingDataToDelete] = useState({
    action: "deleteBooking",
  });

  const { data, isLoading, error, refetch } = useGetBookingsQuery();

  const sortedData = sortByStatusAndDate(data);
  const showLoadingSpinner = useSelector(
    (state) => state.loadingSpinner.loadingSpinner
  );

  useEffect(() => {
    if (bookingId) {
      const element = document.getElementById(`booking.id-${bookingId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }, 500);
      }
    }
  }, [bookingId]);

  const handleDeleteBooking = async (id) => {
    try {
      dispatch(displayLoadingSpinner());
      const res = await fetch("/api/bookings", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error deleting booking:", data.error);
        return;
      }
      await refetch();
      dispatch(removeBooking(id));
      dispatch(displayResultPopUp("Booking has been deleted successfully"));
    } catch (error) {
      console.error("Error:", error);
      dispatch(hideLoadingSpinner());
    } finally {
      dispatch(hideLoadingSpinner());
    }
  };

  const handleAcknowledgeBooking = async (id) => {
    try {
      dispatch(displayLoadingSpinner());
      const res = await fetch("/api/bookings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error("Error acknowledging booking:", data.error);
        return;
      }

      await refetch();
      dispatch(acknowledgeBooking({ id }));
      dispatch(displayResultPopUp("Booking has been acknowledged"));
    } catch (error) {
      console.error("Error:", error);
      dispatch(hideLoadingSpinner());
    } finally {
      dispatch(hideLoadingSpinner());
    }
  };

  const handleClickDelete = (booking) => {
    setBookingDataToDelete({ booking, action: "deleteBooking" });
    dispatch(
      displayConfirmationPopUp("Are you sure you want to delete this booking?")
    );
  };

  return (
    <div className={styles.manageBookingsSection}>
      <h2>Manage Bookings</h2>
      {(isLoading || showLoadingSpinner) && <LoadingSpinner />}
      {sortedData?.map((booking) => (
        <motion.div
          key={booking.id}
          id={`booking.id-${booking.id}`}
          className={`${styles.cardsContainer} ${
            booking.status === "Acknowledged"
              ? styles.acknowledged
              : styles.pending
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.cardHeader}>
            <div className={styles.headerStatusContainer}>
              <div
                className={`${styles.headerStatusInfo} ${
                  styles[booking.status]
                }`}
              >
                {booking.status}
              </div>
            </div>
            <div className={styles.headerUserInfo}>
              <ImageBookingType bookingType={booking.type} size={60} />
              <div className={styles.headerLeftItems}>
                <h4 className={styles.headerName}>{booking.name}</h4>
                <div className={styles.headerDate}>
                  {formatDateAndTime(booking.timestamp)}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.detailsContainer}>
              <div className={styles.date}>
                <div>Reserved for: </div>
                <div>{formatDate(booking.date)}</div>
              </div>
              <div className={styles.time}>
                <div>Time: </div>
                <div>{booking.time.substring(0, 5)}</div>
              </div>
              <div className={styles.type}>
                <div>Type: </div>
                <div>{booking.type}</div>
              </div>
              <div className={styles.persons}>
                <div>Persons:</div>
                <div>{booking.persons}</div>
              </div>
              <div className={styles.duration}>
                <div>Duration:</div>
                <div>{booking.duration}</div>
              </div>
              <div className={styles.phone}>
                <div>Phone:</div>
                <div>{booking.phone}</div>
              </div>
              <div className={styles.court}>
                <div>Court:</div>
                <div>{booking.court}</div>
              </div>
              <div className={styles.buttonsContainer}>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleClickDelete(booking)}
                >
                  Delete
                </button>
                {booking.status === "Pending" && (
                  <button
                    className={styles.acknowledgeButton}
                    onClick={() => handleAcknowledgeBooking(booking.id)}
                  >
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      <ConfirmationPopUp
        bookingData={bookingDataToDelete.booking}
        action={bookingDataToDelete.action}
        handleDeleteBooking={handleDeleteBooking}
      />
      <ResultPopUp />
    </div>
  );
}
