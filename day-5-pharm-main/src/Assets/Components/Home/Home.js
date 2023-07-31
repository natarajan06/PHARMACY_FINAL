import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <div className="dashboard">
          <Link to="/Dashboard" className="nav-link">
            <h2>Dashboard</h2>
          </Link>
        </div>
      
       
      </div>
      
    </div>
  );
};

export default Home;


