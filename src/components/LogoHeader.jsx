// src/components/LogoHeader.jsx
import React from "react";
import logo from "../assets/images/logo.png"; // ✅ correct path

export default function LogoHeader() {
  return (
    <div className="logo-header" style={{ textAlign: "center", margin: "20px 0" }}>
      <img 
        src={logo} 
        alt="Nexvora Logo" 
        style={{ height: "80px" }} // optional: adjust size
      />
    </div>
  );
}


