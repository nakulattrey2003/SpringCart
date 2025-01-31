import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddProductPage = () => {
  // State to store form inputs
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

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]); // Store the selected file
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create form data
    const formData = new FormData();
    formData.append("productModel", JSON.stringify(product)); // Append the product object
    formData.append("imageFile", image); // Append the selected image file

    // console.log("Product: ", product);
    // console.log("Image: ", image);
    // console.log("Form Data: ", formData);
    // console.log("Image File Details:");
    // console.log("Name:", image.name);
    // console.log("Type:", image.type);
    // console.log("Size:", image.size, "bytes");

    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }

    // Send POST request to /addProduct

    try {
      const response = await fetch("http://localhost:8080/addProduct", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert("There was an error adding the product");
      } else {
        alert("Product added successfully");
        navigate("/product");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error adding the product");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-4xl p-6">
        <h2 className="text-2xl font-bold text-green-500 mb-4">Add Product</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="w-full">
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
            {/* Product Brand */}
            <div className="w-full">
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

          {/* Product Description */}
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
            {/* Product Price */}
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

            {/* Product Release Date */}
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
            {/* Product Stock Quantity */}
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

            {/* Product Image URL */}
            <div>
              <label className="block text-white mb-2" htmlFor="image">
                Image:
              </label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full p-3 rounded-md bg-gray-700 text-white border border-green-500"
              />
            </div>
          </div>

          {/* Product Category */}
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
              {/* Add more categories as needed */}
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProductPage;
