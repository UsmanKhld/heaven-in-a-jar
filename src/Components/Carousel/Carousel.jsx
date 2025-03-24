import React, { useEffect, useState, useRef } from "react";
import { database, ref, onValue } from "../../firebase";

import "./Carousel.css";
const Carousel = () => {
  const [carouselData, setCarouselData] = useState({});

  useEffect(() => {
    const carouselRef = ref(database, "carousel");
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      setCarouselData(data || {});
    });
  }, []);

  return (
    <div className="component_container">
      <h1>placeholder</h1>
    </div>
  );
};

export default Carousel;
