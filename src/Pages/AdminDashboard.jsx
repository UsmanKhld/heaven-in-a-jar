import { useState, useEffect } from "react";
import { auth, database, ref, onValue } from "../firebase";
import { set } from "firebase/database";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
	const [menuCategories, setMenuCategories] = useState({});
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		// Check if user is logged in
		const unsubscribe = auth.onAuthStateChanged((user) => {
			if (!user) {
				navigate("/admin");
				return;
			}

			// Check if user is admin using UID
			const adminUID = import.meta.env.VITE_ADMIN_UID;
			if (user.uid !== adminUID) {
				auth.signOut();
				navigate("/admin");
				return;
			}

			// Load menu items
			const menuRef = ref(database, "menuItems");
			onValue(menuRef, (snapshot) => {
				const data = snapshot.val() || {};
				setMenuCategories(data);
				setLoading(false);
			});
		});

		return () => unsubscribe();
	}, [navigate]);

	const toggleItemAvailability = async (category, itemId, currentStatus) => {
		try {
			await set(
				ref(database, `menuItems/${category}/${itemId}/isAvailable`),
				!currentStatus
			);
		} catch (error) {
			console.error("Error updating item:", error);
		}
	};

	const handleLogout = () => {
		auth.signOut();
		navigate("/admin");
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	// Safety check for menuCategories
	if (!menuCategories || typeof menuCategories !== "object") {
		return <div>No menu data available</div>;
	}

	const renderItem = (category, itemId, item) => {
		if (!item || typeof item !== "object") return null;

		return (
			<div key={itemId} className="item-card">
				<h3>{item.name}</h3>
				<p>Description: {item.description}</p>
				{item.prices && (
					<p>
						Prices:{" "}
						{Object.entries(item.prices)
							.map(([size, price]) => `${size}: $${price}`)
							.join(", ")}
					</p>
				)}
				<p>Status: {item.isAvailable ? "Available" : "Unavailable"}</p>
				<button
					onClick={() =>
						toggleItemAvailability(category, itemId, item.isAvailable)
					}
				>
					Toggle Availability
				</button>
			</div>
		);
	};

	const renderCategory = (category, items) => {
		if (!items || typeof items !== "object") return null;

		return (
			<div key={category} className="category-section">
				<h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
				<div className="items-list">
					{Object.entries(items).map(([itemId, item]) =>
						renderItem(category, itemId, item)
					)}
				</div>
			</div>
		);
	};

	return (
		<div className="admin-dashboard">
			<div className="admin-header">
				<h1>Admin Dashboard</h1>
				<button onClick={handleLogout}>Logout</button>
			</div>
			<div className="menu-categories">
				{Object.entries(menuCategories).map(([category, items]) =>
					renderCategory(category, items)
				)}
			</div>
		</div>
	);
}

export default AdminDashboard;
