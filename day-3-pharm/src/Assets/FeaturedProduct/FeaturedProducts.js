// FeaturedProducts.js

import React from 'react';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      image: 'product3.jpg',
    },
  ];

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;