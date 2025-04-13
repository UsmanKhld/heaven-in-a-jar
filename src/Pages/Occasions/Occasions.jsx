import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Occasions.css";
import giftbox from "../../assets/gift-box.jpg";
import giftbag from "../../assets/gift-bag.jpg";

const Occasions = () => {
  // State for Gift Box
  const [boxDesserts, setBoxDesserts] = React.useState(4); // Default to 4 desserts
  const [boxPrice, setBoxPrice] = React.useState(4 * 7.49 + 2.5); // Initial price calculation

  // State for Gift Bag
  const [bagDesserts, setBagDesserts] = React.useState(2); // Default to 4 desserts
  const [bagPrice, setBagPrice] = React.useState(2 * 7.49 + 1.5); // Initial price calculation

  const calculatePrice = (value) => {
    const dessertPrice = value * 7.49;
    const extraCharge = value === 1 || value === 2 ? 1.5 : 2.5;
    return dessertPrice + extraCharge;
  };

  const handleBoxDessertChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setBoxDesserts(value);
    setBoxPrice(calculatePrice(value));
  };

  const handleBagDessertChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setBagDesserts(value);
    setBagPrice(calculatePrice(value));
  };

  return (
    <div>
      <Navbar />
      <div className="occasions-container">
        <div className="occasions-content">
          <div className="giftbox-section">
            <img src={giftbox} alt="Gift Box" className="giftbox-image" />
          </div>
          <div className="options-section">
            <h1 className="giftbox-title">GIFT BOX</h1>
            <p className="giftbox-description">Pick up to</p>
            <h3>Select Occasion</h3>
            <select>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Congratulations</option>
              <option>Thank You</option>
              <option>Get Well Soon</option>
            </select>
            <h3>Select Number of Desserts</h3>
            <select value={boxDesserts} onChange={handleBoxDessertChange}>
              <option value="1">1</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button>Add to Cart - ${boxPrice.toFixed(2)}</button>
          </div>
        </div>

        {/* New Gift Bag Section */}
        <div className="occasions-content">
          <div className="options-section">
            <h1 className="giftbox-title">GIFT BAG</h1>
            <p className="giftbox-description">
              There will be up to 5 desserts with a choice of occasions.
            </p>
            <h3>Select Occasion</h3>
            <select>
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Congratulations</option>
              <option>Thank You</option>
              <option>Get Well Soon</option>
            </select>
            <h3>Select Number of Desserts</h3>
            <select value={bagDesserts} onChange={handleBagDessertChange}>
              <option value="2">2</option>
            </select>
            <button>Add to Cart - ${bagPrice.toFixed(2)}</button>
          </div>
          <div className="giftbox-section">
            <img src={giftbag} alt="Gift Bag" className="giftbox-image" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Occasions;
