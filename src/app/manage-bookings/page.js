"use client";
import { useDispatch } from "react-redux";
import styles from "./page.module.css";
import ImageBookingType from "../components/ImageBookingType/ImageBookingType";
import ResultPopUp from "../components/popUps/ResultPopUp/ResultPopUp";
import { removeBooking } from "@/store/bookingsSlice";
import { useGetBookingsQuery } from "@/store/bookingApi";
import { useState } from "react";
import ConfirmationPopUp from "../components/popUps/ConfirmationPopUp/ConfirmationPopUp";

export default function ManageBookings() {
  const dispatch = useDispatch();
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [displaySuccessfulMessage, setDisplaySuccessfulMessage] =
    useState(false);
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
      setDisplaySuccessfulMessage(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = (booking) => {
    setBookingDataToDelete({ booking, action: "deleteBooking" });
    setConfirmationMessage("Are you sure you want to delete this booking?");
    setIsPopUpVisible(true);
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
                <div className={styles.headerDateTimeContainer}>
                  <div className={styles.headerDate}>{booking.date}</div>
                  <div className={styles.headerTime}>{booking.time}</div>
                </div>
              </div>
            </div>
            <div className={styles.headerRightInfo}>
              <div className={styles.headerStatusInfo}>{booking.status}</div>
            </div>
          </div>
          <div>
            <div className={styles.detailsContainer}>
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
      {isPopUpVisible && (
        <ConfirmationPopUp
          message={confirmationMessage}
          bookingData={bookingDataToDelete.booking}
          setIsPopUpVisible={setIsPopUpVisible}
          action={bookingDataToDelete.action}
          deleteBooking={deleteBooking}
        />
      )}
      {displaySuccessfulMessage && (
        <ResultPopUp
          message={"Booking has been deleted successfully"}
          setDisplaySuccessfulMessage={setDisplaySuccessfulMessage}
        />
      )}
    </div>
  );
}
