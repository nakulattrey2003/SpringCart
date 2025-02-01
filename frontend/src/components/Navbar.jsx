import React from "react";
import { useNavigate } from "react-router-dom"; 

const Header = () => {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/products");
  };

  const navigateToAddProduct = () => {
    navigate("/addProduct"); 
  };

  const navigateToCategories = () => {
    navigate("/categories");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  return (
    <header className="bg-black text-white p-4 border-b-1 border-green-900 shadow-lg shadow-lime-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-500 animate">
          SpringCart
        </h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                onClick={navigateToHome}
                className="text-green-400 border-b-1 animate-pulse hover:text-green-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={navigateToAddProduct}
                className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
              >
                Add Product
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={navigateToCategories}
                className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
              >
                Categories
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={navigateToContact}
                className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
