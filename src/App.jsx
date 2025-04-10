import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home, Menu, Cart, Occasions } from "./Pages/index";
import CheckoutSuccess from "./Pages/CheckoutSuccess/CheckoutSuccess";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
