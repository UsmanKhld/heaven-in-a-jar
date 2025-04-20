import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../firebase";
import "./Menu.css";

const Menu = () => {
	const [menuData, setMenuData] = useState({});
	const [cart, setCart] = useState([]);
	const [toast, setToast] = useState({ show: false, message: "", id: 0 });

	useEffect(() => {
		const menuRef = ref(database, "menuItems");
		onValue(menuRef, (snapshot) => {
			const data = snapshot.val();
			setMenuData(data || {});
		});

		// Load cart from localStorage when component mounts
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setCart(JSON.parse(savedCart));
		}
	}, []);

	const clearCart = () => {
		setCart([]);
		localStorage.removeItem("cart");
	};

	// Hide toast after 3 seconds
	useEffect(() => {
		if (toast.show) {
			const timer = setTimeout(() => {
				setToast((prev) => ({ ...prev, show: false }));
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [toast.id]); // Use toast.id as dependency to ensure effect runs for each new toast

	const addToCart = (item, category, size) => {
		const cartItem = {
			id: `${category}-${item.name}-${size}`,
			name: item.name,
			category,
			size,
			price: item.prices[size],
			imageUrl: item.imageUrl,
		};

		const updatedCart = [...cart, cartItem];
		setCart(updatedCart);

		// Save to localStorage
		localStorage.setItem("cart", JSON.stringify(updatedCart));

		// Show toast notification with a new ID to force re-render
		setToast({
			show: true,
			message: `Added ${item.name} (${size}) to cart!`,
			id: Date.now(), // Use timestamp as unique ID
		});
	};

	return (
		<div>
			<Navbar />
			<div className="flex justify-center p-3 bg-red-400">
				Online ordering currently unavailable, sorry for the inconvenience.
			</div>
			<main className="bg-[#FFEDD8]">
				{toast.show && (
					<div className="toast-notification" key={toast.id}>
						<p>{toast.message}</p>
					</div>
				)}
				<div className="menu-container">
					{/* <button className="clear-cart-btn" onClick={clearCart}>
            Clear Cart
          </button> */}
					{[
						"featured",
						"desserts",
						"shakes",
						"iced coffee",
						"strawberry cups",
						"acai in a jar",
						"overnight oats",
					].map(
						(category) =>
							menuData[category] && (
								<div key={category} className="menu-category">
									<h2 className="category-title text-3xl">
										{category.toUpperCase()}
									</h2>
									<div className="menu-items">
										{Object.keys(menuData[category] || {}).map((itemKey) => {
											const item = menuData[category][itemKey];
											// Only render if item is available
											if (!item.isAvailable) return null;
											return (
												<div key={itemKey} className="menu-card">
													{item.imageUrl && (
														<img
															src={item.imageUrl}
															alt={item.name}
															className="menu-image"
														/>
													)}
													<h3 className="menu-item-title">{item.name}</h3>
													<p className="menu-description">{item.description}</p>
													{category.toLowerCase() === "shakes" ||
													category.toLowerCase() === "iced coffee" ? (
														<div>
															<p className="menu-prices">
																{item.prices?.["16oz"] &&
																	`16oz: $${item.prices["16oz"]}`}
																{item.prices?.["16oz"] &&
																	item.prices?.["24oz"] &&
																	" | "}
																{item.prices?.["24oz"] &&
																	`24oz: $${item.prices["24oz"]}`}
															</p>
															<div className="cart-buttons">
																{item.prices?.["16oz"] && (
																	<button
																		// onClick={() =>
																		// 	addToCart(item, category, "16oz")
																		// }
																		className="add-to-cart-btn"
																	>
																		Add 16oz to Cart
																	</button>
																)}
																{item.prices?.["24oz"] && (
																	<button
																		// onClick={() =>
																		// 	addToCart(item, category, "24oz")
																		// }
																		className="add-to-cart-btn"
																	>
																		Add 24oz to Cart
																	</button>
																)}
															</div>
														</div>
													) : category.toLowerCase() === "acai in a jar" ||
													  category.toLowerCase() === "overnight oats" ? (
														<div>
															{item.prices?.["16oz"] && (
																<>
																	<p className="menu-prices">
																		16oz: ${item.prices["16oz"]}
																	</p>
																	<div className="cart-buttons">
																		<button
																			// onClick={() =>
																			// 	addToCart(item, category, "16oz")
																			// }
																			className="add-to-cart-btn"
																		>
																			Add 16oz to Cart
																		</button>
																	</div>
																</>
															)}
														</div>
													) : (
														<div>
															<p className="menu-prices">
																{item.prices?.["8oz"] &&
																	`8oz: $${item.prices["8oz"]}`}
																{item.prices?.["8oz"] &&
																	item.prices?.["16oz"] &&
																	" | "}
																{item.prices?.["16oz"] &&
																	`16oz: $${item.prices["16oz"]}`}
															</p>
															<div className="cart-buttons">
																{item.prices?.["8oz"] && (
																	<button
																		// onClick={() =>
																		// 	addToCart(item, category, "8oz")
																		// }
																		className="add-to-cart-btn"
																	>
																		Add 8oz to Cart
																	</button>
																)}
																{item.prices?.["16oz"] && (
																	<button
																		// onClick={() =>
																		// 	addToCart(item, category, "16oz")
																		// }
																		className="add-to-cart-btn"
																	>
																		Add 16oz to Cart
																	</button>
																)}
															</div>
														</div>
													)}
												</div>
											);
										})}
									</div>
								</div>
							)
					)}
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Menu;
