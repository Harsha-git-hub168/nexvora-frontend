// src/components/CategoryNavigation.jsx
import React from "react";

export function CategoryNavigation({ onCategoryClick }) {
  const categories = ["Shirts", "Pants", "Accessories", "Mobiles", "Mobile Accessories"];

  return (
    <nav style={{ marginBottom: "20px" }}>
      {categories.map((cat) => (
        <button
          key={cat}
          style={{
            marginRight: "10px",
            padding: "8px 12px",
            cursor: "pointer",
          }}
          onClick={() => onCategoryClick(cat)}
        >
          {cat}
        </button>
      ))}
    </nav>
  );
}

export default CategoryNavigation;
