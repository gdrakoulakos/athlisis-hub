import Image from "next/image";
import styles from "./RequestsOverview.module.css";
import bookings from "@/mockdata/bookings.json";

export default function RequestsOverview({ title, status }) {
  const booked = bookings.filter((booking) => booking.status === status);
  console.log("booked", booked);

  return (
    <>
      <div className={styles.requestsOverviewBlock}>
        <h2 className={styles.requestsOverviewTitle}>{title}</h2>
        <div className={styles.requestsOverviewListWrapper}>
          <section className={styles.requestsOverviewList}>
            {booked.map((booking, index) => (
              <article key={index} className={styles.requestsOverviewItem}>
                <figure className={styles.requestsOverviewItemImage}>
                  <Image
                    src={`/images/${booking.type}.png`}
                    alt="Tennis Icon"
                    width={60}
                    height={60}
                    loading="lazy"
                    className={styles.requestsOverviewItemImg}
                  />
                </figure>
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
