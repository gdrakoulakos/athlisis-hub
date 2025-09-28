import styles from "./page.module.css";
import Upcomings from "./components/Upcomings/Upcomings";

export default function Home() {
  return (
  <div className={styles.homePageSection}>
    <Upcomings />
  </div>
)
}
