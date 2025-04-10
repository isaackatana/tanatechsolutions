import React, { useState } from "react";

function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add booking logic here (e.g., send to backend or email)
    alert("Session booked successfully! We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      notes: ""
    });
  };

  return (
    <section className="booking-page">
      <h1 className="text-3xl font-bold mb-6">Book a Session</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        >
          <option value="">Select Service</option>
          <option value="Recording Session">Recording Session</option>
          <option value="Mixing & Mastering">Mixing & Mastering</option>
          <option value="Video Production">Video Production</option>
          <option value="Tech Consultation">Tech Consultation</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="p-2 border rounded"
        />

        <textarea
          name="notes"
          placeholder="Additional Notes (Optional)"
          value={formData.notes}
          onChange={handleChange}
          className="p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Book Now
        </button>
      </form>
    </section>
  );
}

export default BookingPage;
