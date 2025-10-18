import styles from "./ResultPopUp.module.css";

export default function ResultPopUp({ message, setDisplaySuccessfulMessage }) {
  return (
    <div className={styles.resultPopUpContainer}>
      <h2>{message}</h2>
      <button onClick={() => setDisplaySuccessfulMessage(false)}>OK</button>
    </div>
  );
}
