"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.footerSection}>
      <p>&copy; George Drakoulakos {currentYear}</p>
    </div>
  );
}
