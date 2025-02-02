import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const UpdateProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    brand: "",
    releaseDate: "",
    stock: "",
    category: "",
  });
  const [image, setImage] = useState(null);

  // Fetch existing product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8080/product/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product details");
        const data = await response.json();
        setProduct({
          name: data.name,
          description: data.description,
          price: data.price,
          brand: data.brand,
          releaseDate: data.releaseDate,
          stock: data.quantity,
          category: data.category,
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [id]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]); // Store the selected image
    }
  };

  // Handle form submission (Update Product)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    // formData.append("productModel", JSON.stringify(product));
    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("price", product.price);
    formData.append("brand", product.brand);
    formData.append("releaseDate", product.releaseDate);
    formData.append("stock", product.stock);
    formData.append("category", product.category);
    if (image) formData.append("imageFile", image);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    try {
      const response = await fetch(
        `http://localhost:8080/updateProduct/${id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      if (!response.ok) {
        console.log(1);
        alert("Failed to update product");
      } else {
        console.log(2);

        alert("Product updated successfully");
        navigate("/products");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error updating the product");
    }
  };

  return (
    <div>
      <Navbar />
      {/* Close Button */}
      <button
        onClick={() => navigate(`/product/${id}`)}
        className="absolute mt-6 right-6 text-gray-400 hover:text-gray-200 text-3xl font-bold transition"
      >
        ✕
      </button>
      <div className="container mx-auto max-w-4xl p-6 relative">
        <h2 className="text-2xl font-bold text-green-500 mb-4">
          Update Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div>
              <label className="block text-white mb-2" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={product.name}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
                required
              />
            </div>

            {/* Brand */}
            <div>
              <label className="block text-white mb-2" htmlFor="brand">
                Brand:
              </label>
              <input
                type="text"
                id="brand"
                name="brand"
                value={product.brand}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
                required
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-white mb-2" htmlFor="description">
              Description:
            </label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className="block text-white mb-2" htmlFor="price">
                Price:
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={product.price}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
                required
              />
            </div>

            {/* Release Date */}
            <div>
              <label className="block text-white mb-2" htmlFor="releaseDate">
                Release Date:
              </label>
              <input
                type="date"
                id="releaseDate"
                name="releaseDate"
                value={product.releaseDate}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stock Quantity */}
            <div>
              <label className="block text-white mb-2" htmlFor="stock">
                Stock Quantity:
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-white mb-2" htmlFor="image">
                Product Image:
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-white mb-2" htmlFor="category">
              Product Category:
            </label>
            <select
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
              required
            >
              <option value="">Select Category</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="home-appliances">Home Appliances</option>
              <option value="books">Books</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductPage;
