import Image from "next/image";
import styles from "./Upcomings.module.css";
import bookings from "@/mockdata/bookings.json";

export default function Upcomings() {
  console.log("bookings", bookings);

  return (
    <>
      <h2 className={styles.title}>Upcomings</h2>
      <div className={styles.upcomingsWrapper}>
        <section className={styles.upcomingsSection}>
          {bookings.map((booking, index) => (
            <article key={index} className={styles.upcomingsContainer}>
              <figure className={styles.imageContainer}>
                <Image
                  src={`/images/${booking.type}.png`}
                  alt="Tennis Icon"
                  width={60}
                  height={60}
                  loading="lazy"
                  className={styles.image}
                />
              </figure>
              <div className={styles.infoContainer}>
                <div className={styles.topRow}>
                  <time className={styles.date}>{booking.date}</time>{" "}
                  &nbsp;-&nbsp;
                  <div className={styles.Name}>{booking.name}</div>
                </div>
                <div className={styles.type}>{booking.type}</div>
                <button className={styles.more}>More ...</button>
              </div>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
