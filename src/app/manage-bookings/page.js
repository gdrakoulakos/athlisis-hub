"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.css";
import ImageBookingType from "../components/ImageBookingType/ImageBookingType";

export default function ManageBookings() {
  const bookings = useSelector((state) => state.bookings.list);

  return (
    <div className={styles.manageBookingsSection}>
      <h2>Manage Bookings</h2>
      {bookings.map((booking) => (
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
                <button className={styles.deleteButton}>Delete</button>
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
    </div>
  );
}
