import React from "react";
import "./Main.css";
import ProductDetail from "./productDetail/ProductDetail";

export default function Main() {
  return (
    <div className="main-container">
      <ProductDetail />
      <div className="social-icons">
        <div className="social-text">Facebook</div>
        <div className="social-text">Twitter</div>
        <div className="social-text">Instagram</div>
      </div>
    </div>
  );
}
