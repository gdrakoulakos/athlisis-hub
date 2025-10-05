import styles from "./SuccessfullyPopUp.module.css";

export default function SuccessfullyPopUp({ message }) {
  return (
    <div className={styles.successfullyPopUpContainer}>
      <h2>{message}</h2>
    </div>
  );
}
