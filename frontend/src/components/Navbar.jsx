// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { IoSearchSharp } from "react-icons/io5";

// const Header = () => {
//   const navigate = useNavigate();

//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     if (searchQuery.trim()) {
//       try {
//         const response = await fetch(
//           `http://localhost:8080/search?keyword=${searchQuery}`
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch search results");
//         }
//         const data = await response.json();
//         console.log("Search Results:", data); // Handle the search results
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     }
//   };

//   const navigateToHome = () => {
//     navigate("/products");
//   };

//   const navigateToAddProduct = () => {
//     navigate("/addProduct");
//   };

//   const navigateToCategories = () => {
//     navigate("/categories");
//   };

//   const navigateToContact = () => {
//     navigate("/contact");
//   };

//   return (
//     <header className="bg-black text-white p-4 border-b-1 border-green-900 shadow-lg shadow-lime-400">
//       <div className="container mx-auto flex justify-between items-center">
//         <button
//           onClick={() => navigate("/products")}
//           className="text-2xl font-bold text-green-500 animate"
//         >
//           SpringCart
//         </button>

//         {/* Search Bar with Icon */}
//         <form onSubmit={handleSearch} className="relative w-[700px]">
//           <input
//             type="text"
//             placeholder="Search products..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="px-4 py-2 w-full rounded-lg text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
//           />
//           <button
//             type="submit"
//             className="cursor-pointer absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white"
//           >
//             <IoSearchSharp size={20} />
//           </button>
//         </form>
//         <nav>
//           <ul className="flex space-x-6">
//             <li>
//               <a
//                 href="#"
//                 onClick={navigateToHome}
//                 className="text-green-400 border-b-1 animate-pulse hover:text-green-600"
//               >
//                 Home
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={navigateToAddProduct}
//                 className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
//               >
//                 Add Product
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={navigateToCategories}
//                 className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
//               >
//                 Categories
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 onClick={navigateToContact}
//                 className="text-white hover:text-green-600 hover:border-b-1 transition duration-200"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

const Header = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery.trim().length === 0) {
        setSuggestions([]); // Clear suggestions if input is empty
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/search?keyword=${searchQuery}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch search suggestions");
        }
        const data = await response.json();
        setSuggestions(data.slice(0, 5)); // Limit to 5 suggestions
      } catch (error) {
        console.error("Error fetching search suggestions:", error);
      }
    };

    // Debounce search API calls (waits 500ms before fetching)
    const timeoutId = setTimeout(() => {
      fetchSuggestions();
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup previous timeout on every re-render
  }, [searchQuery]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <header className="bg-black text-white p-4 border-b-1 border-green-900 shadow-lg shadow-lime-400">
      <div className="container mx-auto flex justify-between items-center">
        <button
          onClick={() => navigate("/products")}
          className="text-2xl font-bold text-green-500 animate"
        >
          SpringCart
        </button>

        {/* Search Bar with Suggestions */}
        <form onSubmit={handleSearch} className="relative w-[700px]">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-full rounded-lg text-white border border-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 pr-10"
          />
          <button
            type="submit"
            className="cursor-pointer absolute inset-y-0 right-3 flex items-center text-gray-300 hover:text-white"
          >
            <IoSearchSharp size={20} />
          </button>

          {/* Display Search Suggestions */}
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 bg-opacity-30 backdrop-blur-md text-gray-400 shadow-md rounded-md mt-1 max-h-40 overflow-auto">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSearchQuery(item.name);
                    setSuggestions([]);
                  }}
                  className="px-4 py-2 hover:text-gray-200 cursor-pointer"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
        </form>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <button
                onClick={() => navigate("/products")}
                className="text-green-400 border-b-1 animate-pulse hover:text-green-600"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/addProduct")}
                className="text-white hover:text-green-600 transition duration-200"
              >
                Add Product
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/categories")}
                className="text-white hover:text-green-600 transition duration-200"
              >
                Categories
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/contact")}
                className="text-white hover:text-green-600 transition duration-200"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
