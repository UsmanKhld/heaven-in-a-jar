import React, { useState, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { HomeAbout } from "../../Components/HomeAbout/HomeAbout";
import Carousel from "../../Components/Carousel/Carousel";
import StoreMap from "../../Components/StoreMap/StoreMap";
import "./Home.css";
import bisCake from "../../assets/desserts/biscuit-cake.png";
import Banana from "../../assets/desserts/Banana Pudding.png";
import Brownie from "../../assets/desserts/Brownie Delight.png";
import Espresso from "../../assets/desserts/Espresso Cheesecake.png";
import KeyLime from "../../assets/desserts/Keylime Pie.png";
import Oreo from "../../assets/desserts/Oreo Cheesecake.png";
import RedVelvet from "../../assets/desserts/Red Velvet.png";
import Snicker from "../../assets/desserts/Snickers Cheesecake.png";
import Strawberry from "../../assets/desserts/Strawberry Cheesecake.png";
import Tiramisu from "../../assets/desserts/Tiramisu.png";
import Tres from "../../assets/desserts/Tres Leches.png";

const Home = () => {
  const images = [
    {
      src: Banana,
      alt: "Banana pudding",
      description:
        "Rich and creamy banana pudding with Nilla wafers, banana slices, topped with whipped cream.",
    },
    {
      src: Brownie,
      alt: "Brownie Delight",
      description:
        "Rich and creamy chocolate mousse with brownies, topped with whipped cream.",
    },
    {
      src: Espresso,
      alt: "Espresso Cheesecake",
      description:
        "Delicious mousse-like cheesecake with oreos, with a bold taste of espresso.",
    },
    {
      src: KeyLime,
      alt: "Keylime Pie",
      description:
        "The beloved Key Lime Pie, with layers of cookie crumbs and whipped cream.",
    },
    {
      src: Oreo,
      alt: "Oreo Cheesecake",
      description: "The classic Oreo Cheesecake with our mousse-like twist.",
    },
    {
      src: RedVelvet,
      alt: "Red Velvet",
      description:
        "Moist and soft red velvet cake with sweet cream cheese icing",
    },
    {
      src: Snicker,
      alt: "Snickers Cheesecake",
      description:
        "Reminiscent of the Snickers chocolate candy bar, but in a delicious cheesecake form",
    },
    {
      src: bisCake,
      alt: "Biscuit Cake",
      description:
        "Layers of melted milk chocolate and crushed Marie tea biscuits topped with creamy whipped cream.",
    },
    {
      src: Strawberry,
      alt: "Strawberry Cheesecake",
      description: "The classic and loved Strawberry Cheesecake.",
    },
    {
      src: Tiramisu,
      alt: "Tiramisu",
      description:
        "Non alcoholic Tiramisu with lady finger cookies soaked in espresso, with mascarpone cheese.",
    },
    {
      src: Tres,
      alt: "Tres Leches",
      description:
        "Moist, sweet, and absolutely delicious Tres Leches cake with caramel and a topping of whipped cream.",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const containerRefs = useRef([]);

  const handleDessertClick = (index) => {
    if (index === selectedIndex) {
      setSelectedIndex(null);
    } else {
      const rect = containerRefs.current[index].getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY + 5, // Adjust offset as needed
        left: rect.left + rect.width / 2 + 230, // Center modal above dessert
      });
      setSelectedIndex(index);
    }
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  return (
    <div>
      <Navbar />
      <main>
        <HomeAbout />
        {/* <Carousel /> */}
        <div className="home-hero">
          <div className="w-full h-full flex justify-center items-end">
            <div className="shelf">
              {images.map((dessert, index) => (
                <div
                  key={index}
                  ref={(el) => (containerRefs.current[index] = el)}
                  className={`flex items-end justify-center ${
                    selectedIndex === index ? "z-10" : "z-0"
                  }`}
                  onClick={() => handleDessertClick(index)}
                >
                  <img
                    src={dessert.src}
                    alt={dessert.alt}
                    className={`dessert cursor-pointer transition-transform duration-300 ${
                      selectedIndex === index
                        ? "scale-125"
                        : "scale-100 hover:scale-105"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          {selectedIndex !== null && (
            <div
              className={`modal ${selectedIndex !== null ? "modal-show" : ""}`}
              style={{
                position: "absolute",
                top: `${modalPosition.top}px`,
                left: `${modalPosition.left}px`,
                transform: "translateX(-50%)",
              }}
            >
              <h2 className="modal-title">{images[selectedIndex].alt}</h2>
              <p className="modal-description">
                {images[selectedIndex].description ||
                  "No description available."}
              </p>
              {/* <button className="cartBtn">
                <svg
                  className="cart"
                  fill="white"
                  viewBox="0 0 576 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                </svg>
                ADD TO CART
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 640 512"
                  className="product"
                >
                  <path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z" />
                </svg>
              </button> */}
            </div>
          )}
        </div>
        <StoreMap />
      </main>
    </div>
  );
};

export default Home;
