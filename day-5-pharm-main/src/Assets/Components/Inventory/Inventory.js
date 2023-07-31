import React, { useState } from 'react';
import './Inventory.css';
import Navbar from '../Navbar/Navbar';

const Inventory = () => {
  // Sample inventory data
  const [inventory, setInventory] = useState([
    { id: 1, name: 'Medication A', quantity: 10, expiryDate: '2023-12-31',price:10 },
    { id: 2, name: 'Medication B', quantity: 5, expiryDate: '2023-11-15' ,price:20},
    
    // Add more inventory items here
  ]);

  return (
    <div className="inventory-container">
      <Navbar/>
      <h2>Inventory Management</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiryDate}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
