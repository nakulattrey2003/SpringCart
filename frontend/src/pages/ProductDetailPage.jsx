import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState({});

  const fetchProductDetails = async () => {
    const response = await fetch(`http://localhost:8080/product/${id}`);
    const data = await response.json();
    setProductDetails(data);
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <div className="bg-black text-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      {/* Product Name */}
      <h1 className="text-4xl font-bold text-green-500 mb-6 uppercase">
        {productDetails.name}
      </h1>

      {/* Product Description */}
      <p className="text-lg text-gray-300 mb-6">{productDetails.description}</p>

      <div className="space-y-4">
        {/* Product Details */}
        <div>
          <p className="text-base text-gray-400">
            <span className="font-semibold text-green-400">Brand:</span>{" "}
            {productDetails.brand}
          </p>
          <p className="text-base text-gray-400">
            <span className="font-semibold text-green-400">Category:</span>{" "}
            {productDetails.category}
          </p>
          <p className="text-base text-gray-400">
            <span className="font-semibold text-green-400">Release Date:</span>{" "}
            {productDetails.releaseDate}
          </p>
          <p className="text-base text-gray-400">
            <span className="font-semibold text-green-400">Quantity:</span>{" "}
            {productDetails.quantity}
          </p>
        </div>

        {/* Product Price */}
        <div className="text-xl text-right text-green-400">
          <strong>Price: ${productDetails.price}</strong>
        </div>
      </div>

      {/* Buttons  */}
      <div className="flex justify-center mt-8 gap-11">
        {/* Add to Cart Button */}
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-200">
          Update
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-700 transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
