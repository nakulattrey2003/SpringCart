import React, { useEffect, useState } from "react";
// import tailwindcss from "@tailwindcss/vite";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");

    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-light underline">Products List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.releaseDate}</p>
            <p>{product.quantity}</p>
            <strong>Price: ${product.price}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
