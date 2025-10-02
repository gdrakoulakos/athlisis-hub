import Link from "next/link";
import styles from "./ButtonReserveCourt.module.css";

export default function ButtonReserveCourt() {
  return (
    <Link href="/booking" className={styles.reserveButton}>
      Reserve a Court
    </Link>
  );
}
