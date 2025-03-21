import React, { useEffect, useState, useRef } from "react";
import { database, ref, onValue } from "../../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "./Carousel.css";

import "swiper/css";
import "swiper/css/pagination";

const Carousel = () => {
  const [carouselData, setCarouselData] = useState({});
  const swiperWrappedRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrappedRef.current) {
      swiperWrappedRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 800
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => window.removeEventListener("resize", adjustMargin);
  }, []);

  useEffect(() => {
    const carouselRef = ref(database, "carousel");
    onValue(carouselRef, (snapshot) => {
      const data = snapshot.val();
      setCarouselData(data || {});
    });
  }, []);

  return (
    <div className="component_container">
      <div className="carousel_container">
        <Swiper
          modules={[Pagination]}
          grabCursor
          initialSlide={2}
          centeredSlides
          slidesPerView={"auto"}
          speed={800}
          slideToClickedSlide
          pagination={{ clickable: true }}
          breakpoints={{
            320: { spaceBetween: 40 },
            650: { spaceBetween: 30 },
            1000: { spaceBetween: 20 },
          }}
          onSwiper={(swiper) => {
            swiperWrappedRef.current = swiper.wrapperEl;
          }}
        >
          {Object.keys(carouselData).map((key, index) => (
            <SwiperSlide key={index}>
              <img
                className="car_image"
                src={carouselData[key].imageUrl}
                alt={carouselData[key].title}
              />
              <div className="carousel_title">
                <h1>{carouselData[key].title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
