import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const [productImage, setProductImage] = useState(null);

  const fetchImage = async () => {
    const response = await fetch(
      `http://localhost:8080/products/image/${product.id}`
    );

    const data = await response.json();

    setProductImage(data);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-6 shadow-lg border border-gray-700 max-w-sm mx-auto hover:scale-105 transition-transform duration-300 shadow-gray-800">
      <li key={product.id} className="list-none space-y-6">
        {/* Product Image */}
        <div className="h-48 w-full rounded-lg overflow-hidden">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-48 flex items-center justify-center bg-gray-700 text-white">
              No Image
            </div>
          )}
        </div>
        {/* Product Name */}
        <h2 className="text-3xl font-bold text-green-500 uppercase text-ledft">
          {product.name}
        </h2>
        <p className="font-semibold text-green-600 text-xl -mt-6">
          by{" "}
          <span className="text-gray-300 italic font-semibold ">
            {product.brand}
          </span>
        </p>

        {/* Product Details */}
        <div className="space-y-4 text-sm">
          <p>
            <span className="font-semibold text-green-400">Quantity:</span>{" "}
            <span className="text-gray-300">{product.quantity}</span>
          </p>
        </div>

        {/* Price */}
        <div className="text-right">
          <p className="text-lg font-semibold">
            <span className="text-green-400">Price:</span>{" "}
            <span className="text-gray-200">${product.price}</span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-4">
          {/* Product Description Button */}
          <button
            onClick={handleProductClick}
            className="bg-gray-800 border border-green-500 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-gray-700 transition duration-200"
          >
            View Details
          </button>

          {/* Add to Cart Button */}
          <button className="bg-green-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-green-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </li>
    </div>
  );
};

export default ProductCard;
