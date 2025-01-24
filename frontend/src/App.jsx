import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/products" element={<ProductPage />} />
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
