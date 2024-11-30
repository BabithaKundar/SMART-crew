import React, { useState } from 'react';
import './FeedbackPage.css';

function FeedbackPage() {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: '',
    rating: 0,
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your feedback, ${feedback.name}!`);
    setFeedback({ name: '', email: '', message: '', rating: 0 });
  };

  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={feedback.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={feedback.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={feedback.message}
          onChange={handleChange}
          required
        />
        <label>
          Rating:
          <select
            name="rating"
            value={feedback.rating}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="1">1 - Poor</option>
            <option value="2">2 - Fair</option>
            <option value="3">3 - Good</option>
            <option value="4">4 - Very Good</option>
            <option value="5">5 - Excellent</option>
          </select>
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default FeedbackPage;
