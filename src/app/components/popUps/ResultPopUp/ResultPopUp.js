import styles from "./ResultPopUp.module.css";
import { motion } from "motion/react";
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
    <motion.div
      className={styles.resultPopUpWrapper}
      onClick={() => dispatch(hideResultPopUp())}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.resultPopUpContainer}>
        <h2>{message}</h2>
        <button onClick={handleOk}>OK</button>
      </div>
    </motion.div>
  );
}
