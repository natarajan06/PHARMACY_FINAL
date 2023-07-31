import React from 'react';
import './FeaturedProducts.css';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const FeatureProduct = () => {
  const products = [
    { id: 1, name: 'Product A', price: '$19.99', image: 'product-a.jpg' },
    { id: 2, name: 'Product B', price: '$24.99', image: 'product-b.jpg' },
    { id: 3, name: 'Product C', price: '$29.99', image: 'product-c.jpg' },
    // Add more featured products here
  ];

  return (
    <div className="feature-product-container">
      <Navbar/>
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
