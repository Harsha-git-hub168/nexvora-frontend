// src/pages/Register.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/images/register-bg-shopping.png";

function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("CUSTOMER");

  const handleRegister = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      role,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/login");
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6A0DAD",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.85)",
          padding: "40px",
          borderRadius: "12px",
          maxWidth: "450px",
          width: "90%",
        }}
      >
        <h2 style={{ color: "#6A0DAD", textAlign: "center" }}>Register</h2>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={inputStyle}
          >
            <option value="CUSTOMER">Customer</option>
            <option value="ADMIN">Admin</option>
          </select>

          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already a user? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
