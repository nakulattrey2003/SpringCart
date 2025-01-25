import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <li key={product.id}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>{product.brand}</p>
        <p>{product.category}</p>
        <p>{product.releaseDate}</p>
        <p>{product.quantity}</p>
        <strong>Price: ${product.price}</strong>
      </li>
    </div>
  );
};

export default ProductCard;
