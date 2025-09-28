import styles from "./Upcomings.module.css";

export default function Upcomings() {
  return (
    <div className={styles.upcomingsSection}>
      <h3>Upcomings</h3>
      <div className={styles.upcomingsContainer}>
        <div className={styles.image}>Image</div>
        <div className={styles.infoContainer}>
          <div className={styles.date}>Date</div>
          <div className={styles.Name}>Name</div>
          <div className={styles.type}>Type</div>
          <div className={styles.more}>more...</div>
        </div>
      </div>
    </div>
  );
}
