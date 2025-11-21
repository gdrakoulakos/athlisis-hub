"use client";
import styles from "./RequestsOverview.module.css";
import ImageBookingType from "../ImageBookingType/ImageBookingType";
import { formatDate } from "@/utils/date";
import { sortByDate } from "@/utils/sort";
import { useRouter } from "next/navigation";

export default function RequestsOverview({ title, status, bookings }) {
  const sortedBookings = sortByDate(bookings);
  const router = useRouter();

  const handleMoreClick = (bookingId) => {
    router.push(`/manage-bookings?bookingId=${bookingId}`);
  };

  return (
    <>
      {bookings && (
        <div className={styles.section}>
          <h2 className={styles.title}>{title}</h2>
          <div
            className={styles.listWrapper}
            style={
              title === "New Bookings"
                ? { height: "110px" }
                : { height: "210px" }
            }
          >
            {status === "Pending" && (
              <div className={styles.counter}>
                {bookings.length}
              </div>
            )}
            <section className={styles.list}>
              {sortedBookings.map((booking, index) => (
                <article
                  key={index}
                  className={styles.bookingContainer}
                  onClick={() => handleMoreClick(booking.id)}
                >
                  <ImageBookingType bookingType={booking.type} size={60} />
                  <div className={styles.bookingInfo}>
                    <div className={styles.bookingInfoTopRow}>
                      <time>
                        {formatDate(booking.date)}
                      </time>
                      <div className={styles.requestorName}>
                        {booking.name}
                      </div>
                    </div>
                    <div className={styles.bookingType}>
                      {booking.type}
                    </div>
                    <button className={styles.more}>
                      More...
                    </button>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      )}
    </>
  );
}
