import React, { useState, useRef, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { HomeAbout } from "../../Components/HomeAbout/HomeAbout";
import Carousel from "../../Components/Carousel/Carousel";
import StoreMap from "../../Components/StoreMap/StoreMap";
import Spotlight from "../../Components/Spotlight/Spotlight";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import bisCake from "../../assets/desserts/BiscuitCake_optimized.png";
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
import Smores from "../../assets/desserts/Smores.png";

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
    {
      src: Smores,
      alt: "Smores",
      description:
        "Moist, sweet, and absolutely delicious Tres Leches cake with caramel and a topping of whipped cream.",
    },
  ];
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const containerRefs = useRef([]);
  const modalRef = useRef(null);

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

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main>
        <HomeAbout />
        <Spotlight />
        {/* <Carousel /> */}
        <div className="home-hero">
          <div className="desserts_title md:hidden flex justify-center items-center">
            Our Desserts
          </div>
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
              ref={modalRef} // Attach ref to modal
            >
              <h2 className="modal-title">{images[selectedIndex].alt}</h2>
              <p className="modal-description">
                {images[selectedIndex].description ||
                  "No description available."}
              </p>
            </div>
          )}
        </div>
        <StoreMap />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
