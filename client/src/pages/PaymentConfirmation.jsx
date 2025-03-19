import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function PaymentConfirmation() {
  const location = useLocation();
  const { course, formData } = location.state || {};

  if (!course || !formData) return <h2>Payment data not found.</h2>;

  return (
    <div className="payment-confirmation">
      <h1>Payment Successful! 🎉</h1>
      <p>Thank you, <strong>{formData.name}</strong>, for enrolling in:</p>
      <h2>{course.title}</h2>
      <p>Payment Method: {formData.paymentMethod}</p>
      <p>A confirmation email has been sent to <strong>{formData.email}</strong>.</p>

      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/courses">Explore More Courses</Link>
    </div>
  );
}

export default PaymentConfirmation;
