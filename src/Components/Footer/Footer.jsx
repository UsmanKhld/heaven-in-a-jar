import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Heaven in a Jar - Your local Mom & Pop dessert cafe.</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: heaveninajardesserts@gmail.com</p>
          <p>Phone: (832) 532-7149</p>
          <p>Address: 3159 Hwy 6 # B, Sugar Land, TX 77478</p>
        </div>

        <div className="footer-section">
          <h3>Hours</h3>
          <p>Monday: 11am - 10pm</p>
          <p>Tuesday: Closed</p>
          <p>Wednesday - Thursday: 11am - 10pm</p>
          <p>Friday - Saturday: 11am - 11pm</p>
          <p>Sunday: 11am - 10pm</p>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/HeavenInAJarDessert/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/heaveninajardesserts"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@heaveninajar"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Heaven in a Jar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
