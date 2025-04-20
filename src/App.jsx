import { useState } from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import {
	Home,
	Menu,
	Cart,
	Occasions,
	Catering,
	About,
	Careers,
} from "./Pages/index";
import CheckoutSuccess from "./Pages/CheckoutSuccess/CheckoutSuccess";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import PrivateRoute from "./Pages/PrivateRoute";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/menu" element={<Menu />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout/success" element={<CheckoutSuccess />} />
					<Route path="/occasions" element={<Occasions />} />
					<Route path="/catering" element={<Catering />} />
					<Route path="/about" element={<About />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/admin" element={<AdminLogin />} />
					<Route
						path="/admin/dashboard"
						element={
							<PrivateRoute>
								<AdminDashboard />
							</PrivateRoute>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
