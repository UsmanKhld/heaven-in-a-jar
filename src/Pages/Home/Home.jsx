import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import homeBg from "../../assets/home-bg.png";
import bisCake from "../../assets/biscuit-cake.png"; // Example image

const Home = () => {
  const desserts = [
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
    { src: bisCake, alt: "biscuit cake" },
    { src: bisCake, alt: "another dessert" },
  ];

  return (
    <div>
      <Navbar />
      <main className="home-hero flex justify-center items-end">
        <div className="shelf">
          {desserts.map((dessert, index) => (
            <div key={index} className="flex items-end justify-center">
              <img
                src={dessert.src}
                alt={dessert.alt}
                className="w-40 dessert"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
