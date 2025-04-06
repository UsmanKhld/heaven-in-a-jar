import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import './CheckoutSuccess.css';

const CheckoutSuccess = () => {
  useEffect(() => {
    // Clear the cart after successful payment
    localStorage.removeItem('cart');
  }, []);

  return (
    <div className="checkout-success-page">
      <Navbar />
      <div className="success-container">
        <h1>Thank You for Your Order!</h1>
        <div className="success-message">
          <p>Your payment was successful.</p>
          <p>We'll process your order right away!</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
