import React from "react";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <h2>Product Listings</h2>
      <Link to="/products/1">Product One</Link> <br />
      <Link to="/products/2">Product Two</Link>
      <br />
      <Link to="/products/3">Product Three</Link>
    </div>
  );
}

export default Product;
