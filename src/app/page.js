import styles from "./page.module.css";
import RequestsOverview from "./components/RequestsOverview/RequestsOverview";
import ButtonReserveCourt from "./components/ButtonReserveCourt/ButtonReserveCourt";

export default function Home() {
  return (
    <div className={styles.homePageSection}>
      <RequestsOverview title={"Notifications"} status={"Pending"} />
      <RequestsOverview title={"Upcomings"} status={"Acknowledged"} />
      <ButtonReserveCourt />
    </div>
  );
}
