import React, { useEffect, useState } from "react";

import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";

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
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <header className="text-center py-8">
        <h1 className="text-6xl font-semibold text-gray-300">
          Products <span className="text-green-400 font-bold">List</span>
        </h1>
        <h3 className="text-2xl font-medium text-gray-400 mt-4 mb-10">
          Welcome to{" "}
          <span className="text-green-400 font-bold">SpringCart</span> – Your
          one-stop shop for premium products,
          <br />
          unbeatable prices, and a seamless shopping experience!
        </h3>
      </header>

      <main className="px-4 sm:px-8">
        <ul
          style={{ marginLeft: "7%", marginRight: "7%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {productsList.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
