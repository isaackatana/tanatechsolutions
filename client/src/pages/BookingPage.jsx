import React, { useState } from "react";
import { Link } from "react-router-dom";

function Book() {
  const [hours, setHours] = useState(1); // Minimum 3 hours
  const pricePerHour = 2000; // Ksh 2,000 per hour
  const totalPrice = hours * pricePerHour;

  const handleHoursChange = (event) => {
    const value = Math.max(1, event.target.value); // Ensures minimum 3 hours
    setHours(value);
  };

  return (
    <section className="book-session">
      <h2>Book Your Recording Session</h2>
      <p>Secure your spot at Tana Tech Studios. Our recording sessions are professional, creative, and affordable.</p>

      <div className="booking-form">
        <form>
          <div className="form-group">
            <label htmlFor="hours">Select Session Duration (Minimum 3 hours):</label>
            <input
              type="number"
              id="hours"
              value={hours}
              min="1"
              onChange={handleHoursChange}
            />
          </div>

          <div className="form-group">
            <p>
              <strong>Price:</strong> Ksh {totalPrice.toLocaleString()} (Ksh 2,000 per hour)
            </p>
          </div>

          <div className="form-group">
            <label htmlFor="date">Select a Date:</label>
            <input type="date" id="date" required />
          </div>

          <div className="form-group">
            <label htmlFor="time">Select a Time:</label>
            <input type="time" id="time" required />
          </div>

          <div className="form-group">
            <button type="submit" className="btn primary-btn">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>

      <div className="back-to-home">
        <Link to="/" className="btn secondary-btn">Back to Home</Link>
      </div>
    </section>
  );
}

export default Book;
