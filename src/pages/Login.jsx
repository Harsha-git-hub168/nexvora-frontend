// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bgImage from "../assets/images/register-bg-shopping.png";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      // store logged in user
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

      // 🔥 role-based redirect
      if (storedUser.role === "ADMIN") {
        navigate("/admin-dashboard");
      } else {
        navigate("/home");
      }
    } else {
      alert("Invalid email or password");
    }
  };

  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "16px"
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
    marginTop: "10px"
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>
      <div style={{
        backgroundColor: "rgba(255,255,255,0.85)",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "450px",
        width: "90%"
      }}>
        <h2 style={{ color: "#6A0DAD", textAlign: "center" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={inputStyle}
            required
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account? <Link to="/">Register here</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
