// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import CategoryProducts from "./pages/CategoryProducts";
import CartPage from "./pages/CartPage";
import ViewOrders from "./pages/Vieworders";
import AdminDashboard from "./pages/AdminDashboard";
import AddProduct from "./pages/AddProduct";


// Components
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

// Context
import { CartProvider } from "./context/CartContext";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  // 🔒 get logged in user
  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <CartProvider>
      <Router>
        <Navbar />

        <div style={{ paddingTop: "80px" }}>
          <Routes>
            {/* Auth */}
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* User Pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* 🔥 PROTECTED ADMIN DASHBOARD */}
            <Route
              path="/admin-dashboard"
              element={
                user && user.role === "ADMIN" ? (
                  <AdminDashboard />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route path="/add-product" element={<AddProduct />} />


            {/* Categories */}
            <Route path="/categories" element={<Categories />} />
            <Route path="/products/:id" element={<CategoryProducts />} />

            {/* Cart */}
            <Route path="/cart" element={<CartPage />} />

            {/* Orders */}
            <Route path="/orders" element={<ViewOrders />} />

            {/* Redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
