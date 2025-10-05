"use client";
import Calendar from "react-calendar";
import styles from "./page.module.css";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    date: new Date(),
    duration: null,
    court: null,
    name: "",
    persons: 4,
    bookingType: "Friendly",
  });

  const bookingTypeOptions = ["Friendly", "Tournament", "Party", "Other"];

  const timeOptions = [
    { label: "Select time", value: 0 },
    { label: "1 hour", value: 1 },
    { label: "2 hours", value: 2 },
    { label: "3 hours", value: 3 },
    { label: "4 hours", value: 4 },
    { label: "5 hours", value: 5 },
    { label: "6 hours", value: 6 },
    { label: "7 hours", value: 7 },
    { label: "8 hours", value: 8 },
  ];

  const courtOptions = [
    { label: "Select the court", value: 0 },
    { label: "Court 1", value: 1 },
    { label: "Court 2", value: 2 },
    { label: "Court 3", value: 3 },
    { label: "Court 4", value: 4 },
    { label: "Court 5", value: 5 },
    { label: "Court 6", value: 6 },
  ];

  const handleNameValueChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  const handlePersonsValueChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      persons: e.target.value,
    }));
  };

  const handleTimeValueChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      duration: e.target.value,
    }));
  };

  const handleCourtValueChange = (e) => {
    setBookingData((prev) => ({
      ...prev,
      court: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", bookingData);
  };

  return (
    <div className={styles.bookingBlock}>
      <h1>Booking</h1>
      <div className={styles.nameContainer}>
        <h3>Name:</h3>
        <input
          className={styles.nameInput}
          type="text"
          placeholder="Your name..."
          value={bookingData.name}
          onChange={handleNameValueChange}
        />
        <p>You typed: {bookingData.name}</p>
      </div>
      <div className={styles.bookingTypeContainer}>
        <h3>Booking Type:</h3>
        <select
          className={styles.bookingTypeOptionsContainer}
          name="bookingType"
          id="booking-type-select"
          onChange={(e) =>
            setBookingData((prev) => ({
              ...prev,
              bookingType: e.target.value,
            }))
          }
          value={bookingData.bookingType}
        >
          {bookingTypeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>You selected: {bookingData.bookingType}</p>
      </div>
      <div className={styles.personsContainer}>
        <h3>Persons:</h3>
        <input
          className={styles.nameInput}
          type="number"
          placeholder="Number of persons..."
          value={bookingData.persons}
          onChange={handlePersonsValueChange}
        />
        <p>You typed: {bookingData.persons}</p>
      </div>
      <div className={styles.dateSelectionContainer}>
        <h3>Date:</h3>
        <Calendar
          onChange={(date) =>
            setBookingData((prev) => ({
              ...prev,
              date: date,
            }))
          }
          value={bookingData.date}
          locale="en-US"
          calendarType="iso8601"
        />
        <p>You selected: {bookingData.date.toDateString()}</p>
      </div>
      <div className={styles.timeSelectionContainer}>
        <h3>Duration:</h3>
        <select
          className={styles.timeOptionsContainer}
          name="time"
          id="time-select"
          onChange={handleTimeValueChange}
        >
          {timeOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {bookingData.duration > 0 && (
          <p>You selected: {bookingData.duration} hours</p>
        )}
      </div>
      <div className={styles.courtSelectionContainer}>
        <h3>Court:</h3>
        <select
          className={styles.courtOptionsContainer}
          name="court"
          id="court-select"
          onChange={handleCourtValueChange}
        >
          {courtOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {bookingData.court > 0 && (
          <p>You selected: Court {bookingData.court}</p>
        )}
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Booking
      </button>
    </div>
  );
}
