import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

const images = Object.entries(
	import.meta.glob("../../assets/desserts/*.{png,jpg,jpeg,svg}", {
		eager: true,
	})
).map(([path, module]) => module.default);

const Home = () => {
	return (
		<div>
			<Navbar />
			<main className="home-hero flex justify-center items-end">
				<div className="shelf">
					{images.map((src, index) => (
						<div key={index} className="flex items-end justify-center">
							<img
								src={src}
								alt={`dessert ${index + 1}`}
								className=" dessert"
							/>
						</div>
					))}
				</div>
			</main>
		</div>
	);
};

export default Home;
