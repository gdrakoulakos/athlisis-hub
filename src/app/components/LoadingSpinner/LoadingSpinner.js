import styles from "./LoadingSpinner.module.css";
import { motion } from "motion/react";

export default function LoadingSpinner() {
  return (
    <motion.div
      className={styles.loaderContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <h2>Please wait...</h2>
      <div className={styles.loader}></div>
    </motion.div>
  );
}
