import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-page ">
      <div className="banner" >
        <div className="banner-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you!</p>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>Get In Touch</h2>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" placeholder="Write your message" rows="6" required></textarea>
          </div>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
