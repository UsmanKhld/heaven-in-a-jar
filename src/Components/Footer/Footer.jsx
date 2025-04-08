import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Heaven in a Jar - Your destination for delicious desserts and sweet treats.</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@heaveninajar.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Sweet Street, Dessert City</p>
        </div>
        
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday - Friday: 9am - 9pm</p>
          <p>Saturday - Sunday: 10am - 8pm</p>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Instagram</a>
            <a href="#" className="social-link">Twitter</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Heaven in a Jar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 