// src/pages/Dashboard.jsx
import React from "react";

function Dashboard() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundColor: "#f8f8f8",
      paddingTop: "20px"
    }}>
      <div style={{
        backgroundColor: "white",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "600px",
        width: "90%",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{ color: "#6A0DAD" }}>Admin Dashboard</h1>
        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Welcome, Admin! You can manage users, products, and orders from here.
        </p>
        <p style={{ marginTop: "20px" }}>
          This is a placeholder dashboard. Later you can add product management, order tracking, and analytics.
        </p>
      </div>
    </div>
  );
}

export default Dashboard;
