"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  const headerOptions = ["Home", "Booking", "Groups", "Events", "Calendar"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClicked = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.headerSection}>
      <figure className={styles.logo}>
        <Image
          src="/images/logo-ath2.png"
          alt="Athlisis Hub Logo"
          width={50}
          height={50}
        />
      </figure>

      <div className={styles.burger}>
        <figure className={styles.humbergerMenu}>
          <Image
            src="/images/burger-menu.svg"
            alt="Humburger Menu"
            width={40}
            height={40}
            onClick={handleMenuClicked}
          />
        </figure>
      </div>

      <div
        className={`${styles.optionsContainer} ${menuOpen ? styles.open : ""}`}
      >
        {headerOptions.map((option, index) => (
          <h1 key={index} className={styles.option}>
            {option}
          </h1>
        ))}
      </div>
    </div>
  );
}
