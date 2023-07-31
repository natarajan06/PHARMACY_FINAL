// Inventory.js

import React from 'react';
import './Inventory.css'; // Import the CSS file for styling
import Navbar from '../Navbar/Navbar';

const Inventory = () => {
  return (
    <div className="inventory-container">
        <Navbar/>
      <h1>Inventory Page</h1>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product A</td>
            <td>10</td>
            <td>$10.99</td>
          </tr>
          <tr>
            <td>Product B</td>
            <td>5</td>
            <td>$7.99</td>
          </tr>
          <tr>
            <td>Product C</td>
            <td>8</td>
            <td>$12.99</td>
          </tr>
          {/* Additional rows for products */}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
