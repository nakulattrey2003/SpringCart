import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [productsList, setProductsList] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:8080/products");

    const data = await response.json();

    setProductsList(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-light underline">Products List</h1>
      <ul>
        {productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
