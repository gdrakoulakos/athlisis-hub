"use client";
import Calendar from "react-calendar";
import styles from "./page.module.css";
import "react-calendar/dist/Calendar.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ConfirmationPopUp from "../components/popUps/ConfirmationPopUp/ConfirmationPopUp";
import ResultPopUp from "../components/popUps/ResultPopUp/ResultPopUp";

export default function Booking() {
  const [bookingData, setBookingData] = useState({
    date: new Date(),
    duration: 0,
    court: 0,
    name: "",
    phone: "",
    persons: 4,
    type: "Friendly",
    time: "",
    status: "Pending",
  });
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const bookingTypeOptions = ["Friendly", "Tournament", "Party", "Other"];
  const [bookingResult, setBookingResult] = useState({
    message: "",
    successful: false,
  });
  const router = useRouter();

  const timeOptions = [
    { label: "Select time", value: 0 },
    { label: "8:00", value: "8:00:00" },
    { label: "9:00", value: "9:00:00" },
    { label: "10:00", value: "10:00:00" },
    { label: "11:00", value: "11:00:00" },
    { label: "12:00", value: "12:00:00" },
    { label: "13:00", value: "13:00:00" },
    { label: "14:00", value: "14:00:00" },
    { label: "17:00", value: "17:00:00" },
    { label: "18:00", value: "18:00:00" },
    { label: "19:00", value: "19:00:00" },
    { label: "20:00", value: "20:00:00" },
    { label: "21:00", value: "21:00:00" },
  ];

  const durationOptions = [
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPopUpVisible(true);
  };

  const addBooking = async () => {
    const newBooking = {
      date: bookingData.formattedDate,
      time: bookingData.time,
      name: bookingData.name,
      type: bookingData.type,
      persons: bookingData.persons,
      status: bookingData.status,
      duration: bookingData.duration,
      phone: bookingData.phone,
      court: bookingData.court,
    };
    const res = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBooking),
    });
    const data = await res.json();
    setBookingResult({ message: data.message, successful: true });
    setTimeout(() => {
      setBookingResult({ message: "", successful: false });
      router.push("/");
    }, 3000);
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
          name="name"
          value={bookingData.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.phoneContainer}>
        <h3>Phone Number:</h3>
        <input
          className={styles.phoneInput}
          type="number"
          placeholder="Your phone number..."
          name="phone"
          value={bookingData.phone}
          onChange={handleChange}
        />
      </div>
      <div className={styles.bookingTypeContainer}>
        <h3>Booking Type:</h3>
        <select
          className={styles.bookingTypeOptionsContainer}
          name="type"
          id="booking-type-select"
          value={bookingData.type}
          onChange={handleChange}
        >
          {bookingTypeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.personsContainer}>
        <h3>Persons:</h3>
        <input
          className={styles.nameInput}
          type="number"
          placeholder="Number of persons..."
          name="persons"
          value={bookingData.persons}
          onChange={handleChange}
        />
      </div>
      <div className={styles.dateSelectionContainer}>
        <h3>Date:</h3>
        <Calendar
          onChange={(date) =>
            setBookingData((prev) => ({
              ...prev,
              date,
              formattedDate: date.toISOString().split("T")[0],
            }))
          }
          value={bookingData.date}
          locale="en-US"
          calendarType="iso8601"
        />
      </div>
      <div className={styles.timeContainer}>
        <h3>Time:</h3>
        <select
          className={styles.timeOptionsContainer}
          name="time"
          id="time-select"
          value={bookingData.time}
          onChange={handleChange}
        >
          {timeOptions.map((time, index) => (
            <option key={index} value={time.value}>
              {time.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.durationSelectionContainer}>
        <h3>Duration:</h3>
        <select
          className={styles.durationOptionsContainer}
          name="duration"
          id="duration-select"
          value={bookingData.duration}
          onChange={handleChange}
        >
          {durationOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.courtSelectionContainer}>
        <h3>Court:</h3>
        <select
          className={styles.courtOptionsContainer}
          name="court"
          id="court-select"
          value={bookingData.court}
          onChange={handleChange}
        >
          {courtOptions.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.submitButton} onClick={handleSubmit}>
        Submit Booking
      </button>
      {isPopUpVisible && (
        <ConfirmationPopUp
          bookingData={bookingData}
          setIsPopUpVisible={setIsPopUpVisible}
          addBooking={addBooking}
        />
      )}
      {bookingResult.successful && (
        <ResultPopUp message={bookingResult.message} />
      )}
    </div>
  );
}
