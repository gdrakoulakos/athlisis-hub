"use client";
import { useState } from "react";
import styles from "./TimePicker.module.css";

export default function TimePicker() {
  const [selectedTime, setSelectedTime] = useState([]);
  const [timeClicked, setTimeClicked] = useState(false);

  const timeOptionsMoring = [
    { label: "09:00", value: "9:00:00" },
    { label: "10:00", value: "10:00:00" },
    { label: "11:00", value: "11:00:00" },
    { label: "12:00", value: "12:00:00" },
    { label: "13:00", value: "13:00:00" },
    { label: "14:00", value: "14:00:00" },
    { label: "15:00", value: "15:00:00" },
  ];
  const timeOptionsAfternoon = [
    { label: "17:00", value: "17:00:00" },
    { label: "18:00", value: "18:00:00" },
    { label: "19:00", value: "19:00:00" },
    { label: "20:00", value: "20:00:00" },
    { label: "21:00", value: "21:00:00" },
    { label: "22:00", value: "22:00:00" },
    { label: "23:00", value: "23:00:00" },
  ];

  const handleTimePickerClick = (value) => {
    setSelectedTime((prev) => [...prev, value]);
  };

  console.log("selectedTime", selectedTime);

  return (
    <div className={styles.timePickerContainerAll}>
      <div className={styles.timePickerMoringContainer}>
        <h3>Select the time range:</h3>
        <h4>Morning</h4>
        <div className={styles.timePickerOptions}>
          {timeOptionsMoring.map((option) => (
            <div
              key={option.value}
              className={styles.timePicked}
              onClick={() => handleTimePickerClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.timePickerAfternoonContainer}>
        <h4>Afternoon</h4>
        <div className={styles.timePickerOptions}>
          {timeOptionsAfternoon.map((option) => (
            <div
              key={option.value}
              className={styles.timePicked}
              onClick={() => handleTimePickerClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
