"use client";
import { useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const headerOptions = [
    { name: "Home", path: "/" },
    { name: "Booking", path: "/booking" },
    { name: "Groups", path: "/groups" },
    { name: "Events", path: "/events" },
    { name: "Calendar", path: "/calendar" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClicked = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={styles.headerSection}>
      <Link href="/" className={styles.logoLink}>
        <figure className={styles.logo}>
          <Image
            src="/images/logo-ath2.png"
            alt="Athlisis Hub Logo"
            width={50}
            height={50}
          />
        </figure>
      </Link>

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
        className={`${styles.optionsSection} ${menuOpen ? styles.open : ""}`}
      >
        {headerOptions.map((option, index) => (
          <h1 key={index} className={styles.optionsContainer}>
            <Link
              href={option.path}
              className={styles.option}
              onClick={handleMenuClicked}
            >
              {option.name}
            </Link>
          </h1>
        ))}
      </div>
    </div>
  );
}
