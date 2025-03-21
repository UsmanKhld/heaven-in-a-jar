import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
    <div className="carousel_container">
      <Swiper modules={[Pagination]}>
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.imageUrl} alt={slide.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
