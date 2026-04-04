// src/services/authService.js

const API_URL = "http://localhost:9090/api/auth"; // your Spring Boot base URL

// Register user
export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || "Registration failed" };
    }

    return await response.json();
  } catch (err) {
    console.error("Register API error:", err);
    return { error: "Server error. Please try again later." };
  }
};

// Login user
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return { error: errorData.message || "Login failed" };
    }

    return await response.json();
  } catch (err) {
    console.error("Login API error:", err);
    return { error: "Server error. Please try again later." };
  }
};
