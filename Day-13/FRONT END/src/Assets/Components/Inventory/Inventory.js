import React, { useState, useEffect } from 'react';
import './Inventory.css';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { deleteInventory, getInventory, postInventory, putInventory } from '../../api';

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    quantity: 0,
    expiryDate: '',
  });

  useEffect(() => {
    fetchInventoryData();
  }, []);

  const fetchInventoryData = async () => {
    try {
      const response = await getInventory();
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory data:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postInventory(formData);
      if (response.status === 200) {
        // Item added successfully, refresh inventory data
        fetchInventoryData();
        // Reset the form data after successful submission
        setFormData({
          name: '',
          quantity: 0,
          expiryDate: '',
        });
        // Display a success message
        alert('Inventory item added successfully');
      } else {
        console.error('Failed to add inventory item:', response);
        // Display an error message
        alert('Failed to add inventory item');
      }
    } catch (error) {
      console.error('Error adding inventory item:', error);
      // Display an error message
      alert('Error adding inventory item');
    }
  };

  const handleUpdate = async (itemId) =>
  
   {
    const itemToUpdate = inventory.find((item) => item.id === itemId);
    try {
      const response = await putInventory(itemToUpdate)
      if (response.status === 200) {
        // Item updated successfully, refresh inventory data
        fetchInventoryData();
        // Display a success message
        alert('Inventory item updated successfully');
      } else {
        console.error('Failed to update inventory item:', response);
        // Display an error message
        alert('Failed to update inventory item');
      }
    } catch (error) {
      console.error('Error updating inventory item:', error);
      // Display an error message
      alert('Error updating inventory item');
    }
  };

  const handleDelete = async (itemId) => {
    localStorage.setItem("itemid",itemId);
    try {
      const response = await deleteInventory(itemId)
      if (response.status === 200) {
        // Item deleted successfully, remove it from the inventory state
        setInventory((prevInventory) =>
          prevInventory.filter((item) => item.id !== itemId)
        );
        // Display a success message
        alert('Inventory item deleted successfully');
      } else {
        console.error('Failed to delete inventory item:', response);
        // Display an error message
        alert('Failed to delete inventory item');
      }
    } catch (error) {
      console.error('Error deleting inventory item:', error);
      // Display an error message
      alert('Error deleting inventory item');
    }
  };

  const handleItemInputChange = (event, itemId, fieldName) => {
    const { value } = event.target;
    setInventory((prevInventory) =>
      prevInventory.map((item) =>
        item.id === itemId ? { ...item, [fieldName]: value } : item
      )
    );
  };

  return (
    <div className="inventory-container">
      <Navbar />
      <form onSubmit={handleSubmit} className="add-inventory-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Inventory</button>
      </form>
      <div className='u'>
        <table className="inventory-table">
          {/* <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead> */}
          <tbody>
            {inventory.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <input
                    type="text"
                    value={item.name}
                    onChange={(e) => handleItemInputChange(e, item.id, 'name')}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleItemInputChange(e, item.id, 'quantity')}
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={item.expiryDate}
                    onChange={(e) => handleItemInputChange(e, item.id, 'expiryDate')}
                  />
                </td>
                <td>
                  <button onClick={() => handleUpdate(item.id)}>Update</button>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventory;
