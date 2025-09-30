import styles from "./page.module.css";
import Upcomings from "./components/Upcomings/Upcomings";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";

export default function Home() {
  return (
    <div className={styles.homePageSection}>
      <Upcomings />
      <ButtonReserveCourt />
    </div>
  );
}
