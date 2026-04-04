import React from "react";
import Categories from "./Categories";

function Home() {
  return (
    <div style={{ marginTop: "60px", padding: "20px", minHeight: "100vh", background: "#f3f3f3" }}>
      
      {/* Hero */}
      <div style={{
        textAlign: "center",
        marginBottom: "40px",
        padding: "40px",
        borderRadius: "12px",
        background: "linear-gradient(90deg,#7b2ff7,#f107a3)",
        color: "white"
      }}>
        <h1>Welcome to Nexvora 🛒</h1>
        <p>Discover amazing products across multiple categories</p>
      </div>

      {/* Categories ONLY */}
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "12px"
      }}>
        <h2>Shop by Category</h2>
        <Categories />
      </div>

    </div>
  );
}

export default Home;
