import styles from "./RequestsOverview.module.css";
import ImageBookingType from "../ImageBookingType/ImageBookingType";

export default function RequestsOverview({ title, status, bookings }) {
  const booked = bookings.filter((booking) => booking.status === status);

  return (
    <>
      <div className={styles.requestsOverviewBlock}>
        <h2 className={styles.requestsOverviewTitle}>{title}</h2>
        <div className={styles.requestsOverviewListWrapper}>
          {status === "Pending" && (
            <div className={styles.requestsOverviewCounter}>
              {booked.length}
            </div>
          )}
          <section className={styles.requestsOverviewList}>
            {booked.map((booking, index) => (
              <article key={index} className={styles.requestsOverviewItem}>
                <ImageBookingType bookingType={booking.type} size={60} />
                <div className={styles.requestsOverviewItemInfo}>
                  <div className={styles.requestsOverviewItemTopRow}>
                    <time className={styles.requestsOverviewItemDate}>
                      {booking.date}
                    </time>{" "}
                    &nbsp;-&nbsp;
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
    </>
  );
}
