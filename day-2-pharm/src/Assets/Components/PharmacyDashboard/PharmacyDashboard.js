// PharmacyDashboard.js

import React from 'react';
import './PharmacyDashboard.css'; 
import { Link } from 'react-router-dom';


const PharmacyDashboard = () => {
  return (
    <div className="dashboard-container">
        
      <h1>Pharmacy Dashboard</h1>
      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Total Sales</h3>
          <p>$10,000</p>
        </div>
        <div className="dashboard-card">
          <h3>Pending Prescriptions</h3>
          <p>5</p>
        </div>
        <div className="dashboard-card">
          <h3>Out-of-Stock Items</h3>
          <p>10</p>
        </div>
        <div className="dashboard-card">
          <h3>Upcoming Expirations</h3>
          <p>3</p>
        </div>
      </div>
    </div>
  );
}

export default PharmacyDashboard;
