import styles from "./ResultPopUp.module.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { hideResultPopUp } from "@/redux/features/popUps/resultPopUpSlice";

export default function ResultPopUp({ message, action }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const displayPopUp = useSelector((state) => state.resultPopUp.displayPopUp);

  const handleOk = () => {
    if (action === "addBooking") {
      router.push("/");
    }
    dispatch(hideResultPopUp());
  };

  if (!displayPopUp) return null;

  return (
    <div
      className={styles.resultPopUpWrapper}
      onClick={() => dispatch(hideResultPopUp())}
    >
      <div className={styles.resultPopUpContainer}>
        <h2>{message}</h2>
        <button onClick={handleOk}>OK</button>
      </div>
    </div>
  );
}
