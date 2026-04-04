// src/pages/AdminDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const boxStyle = {
    padding: "20px",
    margin: "15px",
    borderRadius: "10px",
    backgroundColor: "#6A0DAD",
    color: "white",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "18px"
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", color: "#6A0DAD" }}>
        Admin Dashboard
      </h1>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        
        <div style={boxStyle} onClick={() => navigate("/orders")}>
          View Orders
        </div>

        <div style={boxStyle} onClick={() => navigate("/categories")}>
          Manage Categories
        </div>

        <div style={boxStyle} onClick={() => navigate("/products/1")}>
          Manage Products
        </div>

        {/* ✅ ADD THIS ONLY */}
        <div style={boxStyle} onClick={() => navigate("/add-product")}>
          Add Product
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
