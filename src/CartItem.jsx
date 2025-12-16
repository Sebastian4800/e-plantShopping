import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "./CartSlice";
import "./CartItem.css";

export default function CartItem({ onContinueShopping }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseCost = (cost) => {
    // "$15" -> 15
    if (typeof cost === "number") return cost;
    const n = Number(String(cost).replace("$", "").trim());
    return Number.isFinite(n) ? n : 0;
  };

  const calculateTotalCost = (item) => {
    return parseCost(item.cost) * (item.quantity || 0);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((sum, item) => sum + calculateTotalCost(item), 0);
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    onContinueShopping?.(e);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: (item.quantity || 1) + 1 }));
  };

  const handleDecrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: (item.quantity || 1) - 1 }));
  };

  const handleRemove = (item) => {
    dispatch(removeItem({ name: item.name }));
  };

  const handleCheckout = () => {
    alert("Coming Soon");
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: "black" }}>
        Total Cart Amount: ${calculateTotalAmount().toFixed(2)}
      </h2>

      <div>
        {cart.length === 0 ? (
          <p style={{ color: "black" }}>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.name}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>

                <div className="cart-item-cost">
                  Unit Price: ${parseCost(item.cost).toFixed(2)}
                </div>

                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                    title={(item.quantity || 1) <= 1 ? "Minimum is 1" : "Decrease"}
                  >
                    -
                  </button>

                  <span className="cart-item-quantity-value">{item.quantity}</span>

                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>

                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item).toFixed(2)}
                </div>

                <button className="cart-item-delete" onClick={() => handleRemove(item)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <br />
        <button className="get-started-button1" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
}
