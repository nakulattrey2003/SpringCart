import React from "react";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-gray-800 text-white backdrop-blur-xl rounded-2xl p-6 border border-gray-800 max-w-xs mx-auto hover:scale-105 transition-transform">
      <li key={product.id} className="list-none">
        {/* Product Name */}
        <h2 className="text-2xl font-semibold text-green-400 mb-4 uppercase">
          {product.name}
        </h2>

        {/* Product Description */}
        <p className="text-sm text-gray-400 mb-3 font-stretch-100%">
          {product.description}
        </p>

        {/* Product Details */}
        <div className="text-sm space-y-2 mb-4">
          <p>
            <span className="font-semibold text-green-500">Brand:</span>{" "}
            {product.brand}
          </p>
          <p>
            <span className="font-semibold text-green-500">Category:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-semibold text-green-500">Release Date:</span>{" "}
            {product.releaseDate}
          </p>
          <p>
            <span className="font-semibold text-green-500">Quantity:</span>{" "}
            {product.quantity}
          </p>
        </div>

        {/* Price */}
        <div className="text-right mb-4">
          <strong className="text-xl text-green-400">
            Price: ${product.price}
          </strong>
        </div>

        {/* Buttons */}
        <div className="flex justify-evenly">
          {/* Product Description Button */}
          <button
            onClick={handleProductClick}
            className="bg-gray-800 border-1 border-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition duration-200"
          >
            <div className="text-green-500">View Details</div>
          </button>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductCard;
