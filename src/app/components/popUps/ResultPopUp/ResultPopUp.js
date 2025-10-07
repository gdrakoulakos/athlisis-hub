import styles from "./ResultPopUp.module.css";

export default function ResultPopUp({ message }) {
  return (
    <div className={styles.resultPopUpContainer}>
      <h2>{message}</h2>
    </div>
  );
}
