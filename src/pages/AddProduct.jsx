import React, { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = { name, price };

    const oldProducts = JSON.parse(localStorage.getItem("products")) || [];

    const updatedProducts = [...oldProducts, newProduct];

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    alert("Product Added!");

    setName("");
    setPrice("");
  };

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleAddProduct}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
