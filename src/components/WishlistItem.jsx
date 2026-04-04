import React from "react";

const WishlistItem = ({ item, addToCart, removeFromWishlist }) => {
  return (
    <div
      className="wishlist-item"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ccc",
        padding: "10px 0",
        marginBottom: "10px",
      }}
    >
      {/* Product Info */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={item.image || "https://via.placeholder.com/100"}
          alt={item.name}
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            marginRight: "15px",
          }}
        />
        <div>
          <h4 style={{ margin: 0 }}>{item.name}</h4>
          <p style={{ margin: 0 }}>₹ {item.price}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div>
        <button
          onClick={() => addToCart(item)}
          style={{ marginRight: "10px", padding: "5px 10px" }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => removeFromWishlist(item)}
          style={{ padding: "5px 10px" }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default WishlistItem;
