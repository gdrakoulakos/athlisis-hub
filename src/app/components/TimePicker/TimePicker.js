"use client";
import { useState } from "react";
import styles from "./TimePicker.module.css";
import { formatTime } from "@/utils/date";

export default function TimePicker({ handleChange }) {
  const [selectedTime, setSelectedTime] = useState([]);

  const timeOptions = [
    { label: "09:00", value: "09:00:00" },
    { label: "10:00", value: "10:00:00" },
    { label: "11:00", value: "11:00:00" },
    { label: "12:00", value: "12:00:00" },
    { label: "13:00", value: "13:00:00" },
    { label: "14:00", value: "14:00:00" },
    { label: "15:00", value: "15:00:00" },
    { label: "16:00", value: "16:00:00" },
    { label: "17:00", value: "17:00:00" },
    { label: "18:00", value: "18:00:00" },
    { label: "19:00", value: "19:00:00" },
    { label: "20:00", value: "20:00:00" },
    { label: "21:00", value: "21:00:00" },
    { label: "22:00", value: "22:00:00" },
  ];

  const handleTimePickerClick = (value) => {
    // If no times selected yet
    if (selectedTime.length === 0) {
      setSelectedTime([value]);

      // Send start time up
      handleChange({
        target: { name: "time", value },
      });
      handleChange({
        target: { name: "duration", value: 0 },
      });

      return;
    }

    // If one time selected -> select range between first and second
    if (selectedTime.length === 1) {
      const first = selectedTime[0];
      const allValues = timeOptions.map((t) => t.value);
      const startIndex = allValues.indexOf(first);
      const endIndex = allValues.indexOf(value);

      if (startIndex === -1 || endIndex === -1) return;

      const [min, max] =
        startIndex < endIndex ? [startIndex, endIndex] : [endIndex, startIndex];

      const range = allValues.slice(min, max + 1);
      setSelectedTime(range);

      // Calculate total hours
      const totalHours = range.length > 1 ? range.length - 1 : 0;

      // Send updates to parent
      handleChange({
        target: { name: "time", value: range[0] },
      });
      handleChange({
        target: { name: "duration", value: totalHours },
      });

      return;
    }

    // If more than one selected, reset selection
    setSelectedTime([value]);
    handleChange({
      target: { name: "time", value },
    });
    handleChange({
      target: { name: "duration", value: 0 },
    });
  };

  const totalHours = selectedTime.length > 1 ? selectedTime.length - 1 : 0;

  console.log("selected", selectedTime);

  return (
    <div className={styles.timePickerContainerAll}>
      <div className={styles.timePickerMoringContainer}>
        <h3>Select the time range:</h3>
        <div className={styles.timePickerOptions}>
          {timeOptions.map((option) => (
            <div
              key={option.value}
              className={`${styles.timePicked} ${
                selectedTime.includes(option.value) ? styles.selected : ""
              }`}
              onClick={() => handleTimePickerClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.timeSummary}>
        <p>Start time: {formatTime(selectedTime[0])}</p>
        <p>
          End time:
          {selectedTime.length < 2
            ? ""
            : formatTime(selectedTime[selectedTime.length - 1])}
        </p>
        <p>Total Duration: {totalHours} hours</p>
      </div>
    </div>
  );
}
