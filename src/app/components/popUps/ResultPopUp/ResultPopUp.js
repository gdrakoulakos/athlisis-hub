import styles from "./ResultPopUp.module.css";
import { useRouter } from "next/navigation";

export default function ResultPopUp({
  message,
  setDisplaySuccessfulMessage,
  action,
}) {
  const router = useRouter();

  const handleOk = () => {
    if (action === "addBooking") {
      router.push("/");
    }
    setDisplaySuccessfulMessage(false);
  };

  return (
    <div className={styles.resultPopUpContainer}>
      <h2>{message}</h2>
      <button onClick={handleOk}>OK</button>
    </div>
  );
}
