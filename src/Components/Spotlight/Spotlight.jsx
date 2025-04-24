import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Spotlight.css";

import dubaiChoc from "../../assets/carousel/DubaiChocDel.png";
import dubaiStrawberry from "../../assets/carousel/DubaiChocolateStrawberries.png";

const Spotlight = () => {
	const images = [
		{ src: dubaiChoc, alt: "Dubai Chocolate Spotlight" },
		{ src: dubaiStrawberry, alt: "Delicious Dessert 1" },
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
