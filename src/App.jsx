import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/products";
import NativeBar from "./Components/NativeBar";
export default function App() {
  return (
    <div>
      <NativeBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}
