"use client";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleHeaderMenu,
  hideHeaderMenu,
} from "@/redux/features/headerMenuSlice";

export default function Header() {
  const dispatch = useDispatch();
  const displayHeaderMenu = useSelector(
    (state) => state.headerMenu.displayHeaderMenu
  );

  const headerOptions = [
    { name: "Home", path: "/" },
    { name: "Booking", path: "/booking" },
    { name: "Manage Bookings", path: "/manage-bookings" },
  ];

  return (
    <div className={styles.headerSection}>
      <Link href="/" className={styles.logoLink}>
        <figure className={styles.logo}>
          <Image
            src="/images/logo-ath2.png"
            alt="Athlisis Hub Logo"
            width={50}
            height={50}
            onClick={() => dispatch(hideHeaderMenu())}
          />
        </figure>
      </Link>
      <Link href="/" className={styles.headerTitle}>
        <h1 onClick={() => dispatch(hideHeaderMenu())}>AthlisisHub</h1>
      </Link>
      <div className={styles.burger}>
        <figure className={styles.humbergerMenu}>
          <Image
            src="/images/burger-menu.svg"
            alt="Humburger Menu"
            width={40}
            height={40}
            onClick={() => dispatch(toggleHeaderMenu())}
          />
        </figure>
      </div>

      <div
        className={`${styles.optionsSection} ${
          displayHeaderMenu ? styles.open : ""
        }`}
      >
        {headerOptions.map((option, index) => (
          <h1 key={index} className={styles.optionsContainer}>
            <Link
              href={option.path}
              className={styles.option}
              onClick={() => dispatch(toggleHeaderMenu())}
            >
              {option.name}
            </Link>
          </h1>
        ))}
      </div>
    </div>
  );
}
