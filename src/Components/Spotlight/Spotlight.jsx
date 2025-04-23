import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Spotlight.css";

import dubaiChoc from "../../assets/DubaiChocSpotlight.png";
import dessert1 from "../../assets/gift-box.jpg";
import dessert2 from "../../assets/gift-bag.jpg";

const Spotlight = () => {
  const images = [
    { src: dubaiChoc, alt: "Dubai Chocolate Spotlight" },
    { src: dessert1, alt: "Delicious Dessert 1" },
    { src: dessert2, alt: "Delicious Dessert 2" },
  ];

  return (
    <div className="spotlight-container">
      <div className="spotlight-content">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
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
