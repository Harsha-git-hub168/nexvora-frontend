import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import "../assets/styles.css";
import logo from "../assets/images/logo.png";

function Navbar() {
  const { cart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <>
      <div className="navbar">

        {/* Logo + Name */}
        <div className="logo-section">
          <img src={logo} alt="logo" />
          <span className="brand-name">Nexvora</span>
        </div>

        {/* Search */}
        <div className="search-box">
          <input type="text" placeholder="Search products..." />
          <button>🔍</button>
        </div>

        {/* Links + Cart */}
        <div className="nav-links">

          {!user ? (
            <>
              <Link to="/">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              {user.role === "ADMIN" ? (
                <Link to="/admin-dashboard">Admin</Link>
              ) : (
                <Link to="/home">Home</Link>
              )}

              <button
                onClick={handleLogout}
                style={{
                  marginLeft: "10px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "6px 10px",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
              >
                Logout
              </button>
            </>
          )}

          {/* Cart Button */}
          {user && user.role !== "ADMIN" && (
            <button
              onClick={() => setIsCartOpen(true)}
              style={{
                marginLeft: "15px",
                background: "#7b2ff7",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
            </button>
          )}

        </div>
      </div>

      {/* Mini-Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Navbar;
