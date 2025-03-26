import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);

      // Calculate total price
      const total = parsedCart.reduce((sum, item) => sum + item.price, 0);
      setTotalPrice(total);
    }
  }, []);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total
    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    localStorage.removeItem("cart");
  };

  return (
    <div className="cart-page">
      <Navbar />
      <div className="cart-container">
        <h1 className="cart-title">Your Cart</h1>
        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <p>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    {item.imageUrl && (
                      <img src={item.imageUrl} alt={item.name} />
                    )}
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p className="item-category">{item.category}</p>
                    <p className="item-size">Size: {item.size}</p>
                    <p className="item-price">${item.price.toFixed(2)}</p>
                  </div>
                  <button
                    className="remove-item-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <div className="cart-total">
                <h3>Total:</h3>
                <p>${totalPrice.toFixed(2)}</p>
              </div>
              <div className="cart-actions">
                <button className="clear-cart-btn" onClick={clearCart}>
                  Clear Cart
                </button>
                <button className="checkout-btn">Proceed to Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
