import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Sugar from './Sugar';
import ChickenFeet from './ChickenFeet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/sugar" element={<Sugar />} />
        <Route path="/products/chicken-feet" element={<ChickenFeet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;