import React, { useEffect, useState } from "react";

const ViewOrders = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    setOrder(savedOrder);
  }, []);

  if (!order) {
    return (
      <p style={{ textAlign: "center", marginTop: "20px" }}>
        No orders yet.
      </p>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Order</h2>

      {/* Customer Details */}
      <h3>Customer Details</h3>
      <p>Name: {order.customer.name}</p>
      <p>Address: {order.customer.address}</p>
      <p>Phone: {order.customer.phone}</p>

      {/* Items */}
      <h3>Items</h3>
      {order.items.map((item, index) => (
        <div key={index} style={{ marginBottom: "10px" }}>
          <p>{item.name}</p>
          <p>Qty: {item.quantity}</p>
          <p>Price: ₹{item.price * item.quantity}</p>
          <hr />
        </div>
      ))}

      <h2>Total: ₹{order.total}</h2>
    </div>
  );
};

export default ViewOrders;
