// src/components/CartSidebar.jsx
import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function CartSidebar({ isOpen, onClose }) {
  const { cart, addToCart, removeFromCart, clearCart, decreaseQuantity } =
    useContext(CartContext);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!name || !address || !phone) {
      alert("Please fill all details!");
      return;
    }

    alert("Order Placed Successfully! 🎉");

    const orderData = {
  customer: { name, address, phone },
  items: cart,
  total: total,
};

localStorage.setItem("order", JSON.stringify(orderData));


    clearCart();
    setName("");
    setAddress("");
    setPhone("");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 1000,
          }}
        />
      )}

      {/* Sidebar */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : "-420px",
          width: "400px",
          height: "100vh",
          background: "#fff",
          boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
          padding: "20px",
          transition: "right 0.3s ease",
          zIndex: 1001,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            paddingBottom: "10px",
          }}
        >
          <h2>🛒 Shopping Cart</h2>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "20px",
              cursor: "pointer",
            }}
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div style={{ flex: 1, overflowY: "auto", marginTop: "10px" }}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.product_id}
                style={{
                  borderBottom: "1px solid #eee",
                  padding: "10px 0",
                }}
              >
                <p style={{ fontWeight: "bold" }}>{item.name}</p>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <button onClick={() => decreaseQuantity(item.product_id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                <p style={{ marginTop: "5px" }}>
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item.product_id)}
                  style={{
                    background: "#f44336",
                    color: "#fff",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "15px",
            }}
          >
            <h3>Total: ₹{total}</h3>

            {/* Customer Details */}
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />

            {/* Buttons */}
            <button
              onClick={clearCart}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "10px",
                background: "#ddd",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Clear Cart
              window.location.href = "/orders";

            </button>

            <button
              onClick={handleCheckout}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "10px",
                background: "#ff9900",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
