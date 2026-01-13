import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import React, { useEffect, useState } from "react";
import { database, ref, onValue } from "../../firebase";
import "./Menu.css";

const Menu = () => {
	const [menuData, setMenuData] = useState({});
	const [cart, setCart] = useState([]);
	const [toast, setToast] = useState({ show: false, message: "", id: 0 });

	// Modal state
	const [showModal, setShowModal] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedSize, setSelectedSize] = useState("");

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

	// Close modal on Escape
	useEffect(() => {
		if (!showModal) return;
		const onKey = (e) => {
			if (e.key === "Escape") setShowModal(false);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [showModal]);

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

	const openModal = (item, category) => {
		setSelectedItem(item);
		setSelectedCategory(category);
		// pick a default size (first available)
		const sizes = item.prices ? Object.keys(item.prices) : [];
		setSelectedSize(sizes.length ? sizes[0] : "");
		setShowModal(true);
	};

	const closeModal = () => {
		setShowModal(false);
		setSelectedItem(null);
		setSelectedCategory("");
		setSelectedSize("");
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
					<div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '1rem'}}>
      All ingredients are halal
    </div>
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
												<div key={itemKey} className="menu-card" onClick={() => openModal(item, category)}>
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
																		onClick={(e) => {
																			e.stopPropagation();
																			addToCart(item, category, "16oz");
																		}}
																		className="add-to-cart-btn"
																	>
																		Add 16oz to Cart
																	</button>
																)}
																{item.prices?.["24oz"] && (
																	<button
																		onClick={(e) => {
																			e.stopPropagation();
																			addToCart(item, category, "24oz");
																		}}
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
																			onClick={(e) => {
																				e.stopPropagation();
																				addToCart(item, category, "16oz");
																			}}
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
																		onClick={(e) => {
																			e.stopPropagation();
																			addToCart(item, category, "8oz");
																		}}
																		className="add-to-cart-btn"
																	>
																		Add 8oz to Cart
																	</button>
																)}
																 {item.prices?.["16oz"] && (
																	<button
																		onClick={(e) => {
																			e.stopPropagation();
																			addToCart(item, category, "16oz");
																		}}
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

				{/* Modal popup for selected item */}
				{showModal && selectedItem && (
					<div className="modal-overlay" onClick={closeModal}>
						<div className="modal-card" onClick={(e) => e.stopPropagation()}>
							<div className="modal-media">
								{selectedItem.imageUrl ? (
									<img src={selectedItem.imageUrl} alt={selectedItem.name} />
								) : null}
							</div>
							<div className="modal-body">
								<div>
									<div className="modal-title">{selectedItem.name}</div>
									<div className="modal-desc">{selectedItem.description}</div>

										{selectedItem.ingredients && selectedItem.ingredients.toString().trim() !== "" && (
											<div className="modal-ingredients">
												<span className="modal-label">Ingredients:</span>
												<span className="modal-value">{selectedItem.ingredients}</span>
											</div>
										)}

										{selectedItem.allergens && selectedItem.allergens.toString().trim() !== "" && (
											<div className="modal-allergens">
												<span className="modal-label">Allergens:</span>
												<span className="modal-value">{selectedItem.allergens}</span>
											</div>
										)}
									

								</div>

								<div className="modal-sizes">
									{selectedItem.prices && Object.keys(selectedItem.prices).map((sizeKey) => (
										<button
											key={sizeKey}
											className={`size-option ${selectedSize === sizeKey ? 'active' : ''}`}
											onClick={() => setSelectedSize(sizeKey)}
										>
											{sizeKey} • ${selectedItem.prices[sizeKey]}
										</button>
									))}
								</div>

								<div className="modal-actions">
									<button
										className="add-to-cart-btn"
										onClick={() => {
											addToCart(selectedItem, selectedCategory, selectedSize || Object.keys(selectedItem.prices || {})[0]);
											closeModal();
										}}
									>
										Add to Cart • ${selectedItem.prices ? (selectedItem.prices[selectedSize] || selectedItem.prices[Object.keys(selectedItem.prices)[0]]) : '0.00'}
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</div>
	);
};

export default Menu;
