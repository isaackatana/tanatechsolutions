import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const coursesData = [
  { id: 1, title: "Graphics Design Full Course", price: "$49" },
  { id: 2, title: "Master Video Editing", price: "$79" },
  { id: 3, title: "Responsive Web Design", price: "$99" },
  { id: 4, title: "Full-Stack Web Development", price: "$129" },
];

function EnrollmentPage() {
  const { courseId } = useParams();
  const course = coursesData.find((c) => c.id === parseInt(courseId));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", paymentMethod: "Credit Card" });

  if (!course) return <h2>Course not found</h2>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate a payment process
    setTimeout(() => {
      navigate('/payment-confirmation', { state: { course, formData } });
    }, 1000);
  };

  return (
    <div className="enrollment-page">
      <h1>Enroll in {course.title}</h1>
      <p>Price: {course.price}</p>
      
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" placeholder="Enter your name" required onChange={handleChange} />
        
        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter your email" required onChange={handleChange} />
        
        <label>Payment Method:</label>
        <select name="paymentMethod" onChange={handleChange}>
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Bank Transfer</option>
        </select>

        <button type="submit">Confirm Payment</button>
      </form>

      <br />
      <Link to="/courses">← Back to Courses</Link>
    </div>
  );
}

export default EnrollmentPage;
