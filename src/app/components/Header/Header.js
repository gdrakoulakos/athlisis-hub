import styles from "./Header.module.css";

export default function Header() {
  const headerOptions = ["Home", "Booking", "Groups"];

  return (
    <div className={styles.headerSection}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.optionsContainer}>
        {headerOptions.map((option, index) => (
          <div key={index} className={styles.option}>{option}</div>
        ))}
      </div>
    </div>
  );
}
