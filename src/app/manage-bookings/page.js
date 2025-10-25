"use client";
import { useDispatch } from "react-redux";
import styles from "./page.module.css";
import ImageBookingType from "../components/ImageBookingType/ImageBookingType";
import ResultPopUp from "../components/popUps/ResultPopUp/ResultPopUp";
import { removeBooking } from "@/redux/features/bookingsSlice";
import { displayConfirmationPopUp } from "@/redux/features/popUps/confirmationPopUpSlice";
import { useGetBookingsQuery } from "@/redux/api/bookingApi";
import { useState } from "react";
import ConfirmationPopUp from "../components/popUps/ConfirmationPopUp/ConfirmationPopUp";

export default function ManageBookings() {
  const dispatch = useDispatch();
  const [displayResultPopUp, setDisplayResultPopUp] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [bookingDataToDelete, setBookingDataToDelete] = useState({
    action: "deleteBooking",
  });

  const { data, isLoading, error, refetch } = useGetBookingsQuery();

  const deleteBooking = async (id) => {
    try {
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
      setDisplayResultPopUp(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (booking) => {
    setBookingDataToDelete({ booking, action: "deleteBooking" });
    setConfirmationMessage("Are you sure you want to delete this booking?");
    dispatch(displayConfirmationPopUp());
  };

  return (
    <div className={styles.manageBookingsSection}>
      <h2>Manage Bookings</h2>
      {data?.map((booking) => (
        <div key={booking.id} className={styles.cardsContainer}>
          <div className={styles.cardHeader}>
            <div className={styles.headerLeftInfo}>
              <ImageBookingType bookingType={booking.type} size={40} />
              <div className={styles.headerLeftItems}>
                <h4 className={styles.headerName}>{booking.name}</h4>
                <div className={styles.headerDate}>{booking.created_at}</div>
              </div>
            </div>
            <div className={styles.headerRightInfo}>
              <div className={styles.headerStatusInfo}>{booking.status}</div>
            </div>
          </div>
          <div>
            <div className={styles.detailsContainer}>
              <div className={styles.date}>
                <div>Date: </div>
                <div>{booking.date}</div>
              </div>
              <div className={styles.time}>
                <div>Time: </div>
                <div>{booking.time}</div>
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
                  onClick={() => handleDelete(booking)}
                >
                  Delete
                </button>
                <button className={styles.editButton}>Edit</button>
                {booking.status === "Pending" && (
                  <button className={styles.acknowledgeButton}>
                    Acknowledge
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      <ConfirmationPopUp
        message={confirmationMessage}
        bookingData={bookingDataToDelete.booking}
        action={bookingDataToDelete.action}
        deleteBooking={deleteBooking}
      />
      {displayResultPopUp && (
        <ResultPopUp
          message={"Booking has been deleted successfully"}
          setDisplayResultPopUp={setDisplayResultPopUp}
        />
      )}
    </div>
  );
}
