import React, { useState } from 'react';
import './PointofSale.css';
import Navbar from '../Navbar/Navbar';

const PointOfSale = () => {
  // const [medications, setMedications] = useState([
  //   { id: 1, name: 'Medication A', price: 10 },
  //   { id: 2, name: 'Medication B', price: 15 },
  //   { id: 3, name: 'Medication C', price: 20 },
  //   // Add more medications here
  // ]);

  const [cart, setCart] = useState([]);
  const[itemName,setItemName]=useState();
  const[itemPrice,setItemPrice]=useState();
  const handleItemName=(e)=>{
    setItemName(e.target.value)
    console.log(itemName)
  
  }
  const handleItemPrice=(e)=>{
    setItemPrice(e.target.value)
    console.log(itemPrice)
  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(itemName);
    console.log(itemPrice);

  }
  const handleAddToCart = (medication) => {
    setCart([...cart, medication]);
  };

  return (
    <div className="pos-container">
        <Navbar/>
      <h2 className="pos-heading">Pharmacy Point of Sale</h2>

      <div className="medications-container">
        {/* <ul className="medications-list">
          {medications.map((medication) => (
            <li key={medication.id}>
              <span>{medication.name}</span>
              <span>${medication.price}</span>
              <button onClick={() => handleAddToCart(medication)}>Add to Cart</button>
            </li>
          ))}
        </ul> */}

        <div className="cart-container">
          <h3 className="cart-heading">Cart</h3>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <strong>${item.price}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="add-to-cart-container">
        <h3 className="add-to-cart-heading">Add Custom Item to Cart</h3>
        <form className="add-to-cart-form" onSubmit={handleSubmit}>
          <label htmlFor="item-name">Item Name:</label>
          <input type="text" id="item-name" onChange={handleItemName} value={itemName}/>

          <label htmlFor="item-price">Item Price:</label>
          <input type="text" id="item-price" onChange={handleItemPrice} value={itemPrice}/>

          <button>Add to Cart</button>
        </form>
      </div>

      <div className="prescription-container">
        <h3 className="prescription-heading">Prescription</h3>
        {/* Add prescription form or details here */}
      </div>
    </div>
  );
};

export default PointOfSale;