import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:9090/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.error(err));
  }, []);

  const handleCategoryClick = (id) => {
    navigate(`/products/${id}`); // Matches App.jsx route
  };

  const icons = {
    "Beauty & Personal Care": "💄",
    "Books": "📚",
    "Electronics": "💻",
    "Footwear": "👟",
    "Home & Kitchen": "🏠",
    "Men Clothing": "👔",
    "Women Clothing": "👗",
    "Mobiles & Accessories": "📱",
    "Sports & Outdoors": "🏀",
    "Toys & Baby Products": "🧸"
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))",
        gap: "25px"
      }}
    >
      {categories.map((cat) => (
        <div
          key={cat.category_id}
          onClick={() => handleCategoryClick(cat.category_id)}
          style={{
            borderRadius: "12px",
            padding: "25px",
            cursor: "pointer",
            background: "#fafafa",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
        >
          <div style={{ fontSize: "40px", marginBottom: "10px" }}>
            {icons[cat.category_name] || "🛍️"}
          </div>
          <h3 style={{ fontSize: "16px" }}>{cat.category_name}</h3>
        </div>
      ))}
    </div>
  );
}

export default Categories;
