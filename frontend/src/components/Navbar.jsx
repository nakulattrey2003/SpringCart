import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 border-b-1 border-green-900 shadow-lg shadow-lime-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-500 animate">SpringCart</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#"
                className="text-green-400 border-b-1 animate-pulse hover:text-green-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-green-600 hover:underline transition duration-200"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-green-600 hover:underline transition duration-200"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-green-600 hover:underline transition duration-200"
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
