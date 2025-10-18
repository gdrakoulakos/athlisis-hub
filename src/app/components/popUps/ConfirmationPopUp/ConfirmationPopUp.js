import styles from "./ConfirmationPopUp.module.css";

export default function ConfirmationPopUp({
  bookingData,
  setIsPopUpVisible,
  addBooking,
  message,
  action,
  deleteBooking,
}) {
  const handleConfirmClick = () => {
    if (action === "addBooking") {
      addBooking();
    } else if (action === "deleteBooking") {
      deleteBooking(bookingData.id);
    }
    setIsPopUpVisible(false);
  };

  return (
    <div className={styles.confirmationPopUpContainer}>
      <h2>{message}</h2>
      <p>Name: {bookingData.name}</p>
      <p>Phone: {bookingData.phone}</p>
      <p>Booking Type: {bookingData.type}</p>
      <p>Persons: {bookingData.persons}</p>
      <p>
        Date:{" "}
        {bookingData.date
          ? new Date(bookingData.date).toLocaleDateString()
          : "No date provided"}
      </p>
      <p>Time: {bookingData.time}</p>
      <p>Duration: {bookingData.duration} hours</p>
      <p>Court: Court {bookingData.court}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.confirmButton} onClick={handleConfirmClick}>
          Confirm
        </button>
        <button
          className={styles.cancelButton}
          onClick={() => setIsPopUpVisible(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
