"use client";
import styles from "./ConfirmationPopUp.module.css";
import { motion } from "motion/react";
import { useDispatch, useSelector } from "react-redux";
import { hideConfirmationPopUp } from "@/redux/features/popUps/confirmationPopUpSlice";

export default function ConfirmationPopUp({
  bookingData,
  addBooking,
  message,
  action,
  handleDeleteBooking,
}) {
  const dispatch = useDispatch();
  const displayPopUp = useSelector(
    (state) => state.confirmationPopUp.displayPopUp
  );

  if (!displayPopUp) return null;

  const handleConfirmClick = () => {
    if (action === "addBooking") {
      addBooking();
    } else if (action === "deleteBooking") {
      handleDeleteBooking(bookingData.id);
    }
    dispatch(hideConfirmationPopUp());
  };

  return (
    <motion.div
      className={styles.confirmationPopUpWrapper}
      onClick={() => dispatch(hideConfirmationPopUp())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.confirmationPopUpContainer}>
        <h2>{message}</h2>
        <p>Name: {bookingData.name}</p>
        <p>Phone: {bookingData.phone}</p>
        <p>Booking Type: {bookingData.type}</p>
        <p>Persons: {bookingData.persons}</p>
        <p>Date: {bookingData?.date}</p>
        <p>Time: {bookingData.time}</p>
        <p>Duration: {bookingData.duration} hours</p>
        <p>Court: Court {bookingData.court}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={handleConfirmClick}>
            Confirm
          </button>
          <button
            className={styles.cancelButton}
            onClick={() => dispatch(hideConfirmationPopUp())}
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  );
}
