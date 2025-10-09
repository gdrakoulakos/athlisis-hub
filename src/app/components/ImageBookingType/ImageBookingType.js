import Image from "next/image";
import styles from "./ImageBookingType.module.css";

export default function ImageBookingType({ bookingType, size }) {
  return (
    <figure className={styles.imageContainer}>
      <Image
        src={`/images/${bookingType}.png`}
        alt="Tennis Icon"
        width={size}
        height={size}
        loading="lazy"
        className={styles.imageItem}
      />
    </figure>
  );
}
