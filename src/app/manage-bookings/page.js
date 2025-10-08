"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

export default function ManageBookings() {
  const bookings = useSelector((state) => state.bookings.list);

  console.log("bookings", bookings);

  const tableHeaderOptions = ["Date", "Time", "Duration", "Name"];

  return (
    <div className={styles.manageBookingsContainer}>
      <h2>Manage Bookings</h2>
      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          <div className={styles.headerLeftInfo}>
            <div className={styles.image}>☺</div>
            <div className={styles.headerLeftItems}>
              <div className={styles.headerName}>George Drakoulakos</div>
              <div className={styles.headerDateTimeContainer}>
                <div className={styles.headerDate}>20-10-2025</div>
                <div className={styles.headerTime}>10:00</div>
              </div>
            </div>
          </div>
          <div className={styles.headerRightInfo}>
            <div className={styles.headerStatusInfo}>Pending ➢ </div>
          </div>
        </div>
        <div>
          <div className={styles.detailsContainer}>
            <div className={styles.type}>
              <div>Type: </div>
              <div>Friendly</div>
            </div>
            <div className={styles.persons}>
              <div>Persons:</div>
              <div>4</div>
            </div>
            <div className={styles.duration}>
              <div>Duration:</div>
              <div>2 hours</div>
            </div>
            <div className={styles.phone}>
              <div>Phone:</div>
              <div>6985225566</div>
            </div>
            <div className={styles.court}>
              <div>Court:</div>
              <div>2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
