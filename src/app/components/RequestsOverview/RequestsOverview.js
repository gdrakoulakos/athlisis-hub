import styles from "./RequestsOverview.module.css";
import ImageBookingType from "../ImageBookingType/ImageBookingType";
import { formatDate } from "@/utils/date";
import { sortByDate } from "@/utils/sort";

export default function RequestsOverview({ title, status, bookings }) {
  const sortedBookings = sortByDate(bookings);

  return (
    <>
      {bookings && (
        <div className={styles.requestsOverviewBlock}>
          <h2 className={styles.requestsOverviewTitle}>{title}</h2>
          <div
            className={styles.requestsOverviewListWrapper}
            style={
              title === "New Bookings"
                ? { height: "140px" }
                : { height: "240px" }
            }
          >
            {status === "Pending" && (
              <div className={styles.requestsOverviewCounter}>
                {bookings.length}
              </div>
            )}
            <section className={styles.requestsOverviewList}>
              {sortedBookings.map((booking, index) => (
                <article key={index} className={styles.requestsOverviewItem}>
                  <ImageBookingType bookingType={booking.type} size={60} />
                  <div className={styles.requestsOverviewItemInfo}>
                    <div className={styles.requestsOverviewItemTopRow}>
                      <time className={styles.requestsOverviewItemDate}>
                        {formatDate(booking.date)}
                      </time>{" "}
                      <div className={styles.requestsOverviewItemName}>
                        {booking.name}
                      </div>
                    </div>
                    <div className={styles.requestsOverviewItemType}>
                      {booking.type}
                    </div>
                    <button className={styles.requestsOverviewMore}>
                      More ...
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
