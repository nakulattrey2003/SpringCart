import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
