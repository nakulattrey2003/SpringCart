import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productDetails, setProductDetails] = useState({});
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/product/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProductDetails(data);
      } catch (error) {
        console.error(error);
      }
    };

    if (id) fetchProductDetails();
  }, [id]);

  useEffect(() => {
    const fetchProductImage = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/product/image/${id}`
        );
        if (!response.ok) throw new Error("Failed to fetch product image");
        const blob = await response.blob();
        setProductImage(URL.createObjectURL(blob));
      } catch (error) {
        console.error(error);
      }
    };

    if (productDetails.id) fetchProductImage();
  }, [productDetails.id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/deleteProduct/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Failed to delete product");
      alert("Product deleted successfully");
      navigate("/products");
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-gray-900 text-white p-12 relative">
        {/* Close Button */}
        <button
          onClick={() => navigate(`/products`)}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-200 text-3xl font-bold transition"
        >
          ✕
        </button>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12 mt-24">
          {/* Product Image on the Left */}
          <div className="w-full md:w-1/2">
            {productImage ? (
              <img
                src={productImage}
                alt={productDetails.name}
                className="w-full max-h-[500px] object-cover rounded-lg shadow-xl"
              />
            ) : (
              <div className="w-full h-[500px] flex items-center justify-center bg-gray-700 text-white rounded-lg shadow-xl">
                No Image
              </div>
            )}
          </div>

          {/* Product Details on the Right */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Product Name */}
            <h1 className="text-5xl font-bold text-green-400 tracking-wide uppercase">
              {productDetails.name}
            </h1>

            {/* Product Description */}
            <p className="text-2xl text-gray-300 leading-relaxed">
              {productDetails.description}
            </p>

            {/* Product Information Grid (No Headings, Just Data) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-lg text-gray-300 border-t border-gray-700 pt-6">
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">🛠</span>
                <span className="text-gray-300">{productDetails.brand}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">📂</span>
                <span className="text-gray-300">{productDetails.category}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">📅</span>
                <span className="text-gray-300">
                  {productDetails.releaseDate}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-400 text-xl">📦</span>
                <span className="text-gray-300">{productDetails.quantity}</span>
              </div>
            </div>

            {/* Price Section */}
            <div className="text-4xl font-semibold text-green-500 mt-32">
              ${productDetails.price}
            </div>

            {/* Buttons */}
            <div className="flex gap-6">
              <button
                onClick={() => navigate(`/updateProduct/${id}`)}
                className="bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-500 transition duration-200 shadow-md"
              >
                Update
              </button>
              <button onClick={handleDelete} className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-500 transition duration-200 shadow-md">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
