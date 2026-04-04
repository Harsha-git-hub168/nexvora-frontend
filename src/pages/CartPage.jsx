// src/pages/CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.product_id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <p style={{ margin: 0, fontWeight: "bold" }}>{item.name}</p>
                <p style={{ margin: "5px 0 0 0" }}>
                  ₹{item.price} x {item.quantity} = ₹{item.price * item.quantity}
                </p>
              </div>

              <button
                onClick={() => removeFromCart(item.product_id)}
                style={{
                  background: "#f44336",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}

          <div style={{ marginTop: "20px", borderTop: "1px solid #eee", paddingTop: "10px" }}>
            <h3>Total: ₹{total}</h3>

            <button
              onClick={clearCart}
              style={{
                padding: "10px 15px",
                background: "#7b2ff7",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
                marginRight: "10px",
              }}
            >
              Clear Cart
            </button>

            <button
              style={{
                padding: "10px 15px",
                background: "#ff9900",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
