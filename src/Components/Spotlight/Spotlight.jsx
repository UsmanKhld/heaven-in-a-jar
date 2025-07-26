import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Spotlight.css";

import dubaiChoc from "../../assets/carousel/DubaiChocDel.png";
import dubaiStrawberry from "../../assets/carousel/DubaiChocolateStrawberries.png";
import slide1 from "../../assets/carousel/1.png";
import slide2 from "../../assets/carousel/2.png";
import slide3 from "../../assets/carousel/3.png";
import slide4 from "../../assets/carousel/4.png";
import slide5 from "../../assets/carousel/5.png";
import slide6 from "../../assets/carousel/6.png";
import slide7 from "../../assets/carousel/7.png";

const Spotlight = () => {
  const images = [
    { src: slide1, alt: "Delicious Dessert 1" },
    { src: slide2, alt: "Delicious Dessert 1" },
    { src: slide3, alt: "Delicious Dessert 1" },
    { src: slide4, alt: "Delicious Dessert 1" },
    { src: slide5, alt: "Delicious Dessert 1" },
    { src: slide6, alt: "Delicious Dessert 1" },
    { src: slide7, alt: "Delicious Dessert 1" },
  ];

  return (
    <div className="spotlight-container">
      <div className="spotlight-content">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="spotlight-carousel"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="spotlight-image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="spotlight-image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Spotlight;
