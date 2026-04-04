// src/pages/CategoryProducts.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CategoryProducts() {
  const { id } = useParams(); // category ID or name from URL
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  // Fetch products for this category
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`http://localhost:9090/api/products/category/${id}`);
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        console.log("Fetched products:", data);
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products in "{id}" Category</h2>

      {products.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product.product_id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
                background: "#fafafa",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={`/pimages/${product.image_url}`}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />

              <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
              <p>{product.description}</p>
              <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
              <p>Stock: {product.stock}</p>

              <button
                onClick={() => addToCart(product)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  background: "#7b2ff7",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProducts;
