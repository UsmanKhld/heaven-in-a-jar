import React, { useState, useRef } from "react";
import Navbar from "../../Components/Navbar/Navbar";
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
      alt: "banana pudding",
      description:
        "Rich and creamy banana pudding with Nilla wafers, banana slices, topped with whipped cream.",
    },
    {
      src: Brownie,
      alt: "Brownie Delight",
      description:
        "Rich and creamy chocolate mousse with brownies, topped with whipped cream.",
    },
    { src: Espresso, alt: "Espresso Cheesecake", description: "" },
    { src: KeyLime, alt: "Keylime Pie", description: "" },
    { src: Oreo, alt: "Oreo Cheesecake", description: "" },
    { src: RedVelvet, alt: "Red Velvet", description: "" },
    { src: Snicker, alt: "Snickers Cheesecake", description: "" },
    {
      src: bisCake,
      alt: "biscuit cake",
      description:
        "Layers of melted milk chocolate and crushed Marie tea biscuits topped with creamy whipped cream.",
    },
    { src: Strawberry, alt: "Strawberry Cheesecake", description: "" },
    { src: Tiramisu, alt: "Tiramisu", description: "" },
    { src: Tres, alt: "Tres Leches", description: "" },
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
        top: rect.top + window.scrollY - 100, // Adjust offset as needed
        left: rect.left + rect.width / 2 - 200, // Center modal above dessert
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
      <main className="home-hero">
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
              {images[selectedIndex].description || "No description available."}
            </p>
            <button
              className="modal-button"
              onClick={() => alert("Added to cart!")}
            >
              Add to Cart
            </button>
            <button className="modal-close" onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
