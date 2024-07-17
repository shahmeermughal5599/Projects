import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  //you can get dynamic values through useParams
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Detail</h2>

      <p>Product Id is {productId}</p>
    </div>
  );
}

export default ProductDetail;
