// import React from 'react';
// import './Home.css'; 
// import Navbar from '../Navbar/Navbar';
// const Home = () => {
//   return (
    
//     <div className="home-container">
//       <Navbar/>
//       <main className="main-content">
//         <div className="dashboard">
//           <h2>Dashboard Overview</h2>
//         </div>
//         <div className="featured-products">
//           <h2>Featured Products</h2>
//         </div>
//         <div className="quick-links">
//           <h2>Quick Links</h2>
//         </div>
//         <div className="news-announcements">
//           <h2>News and Announcements</h2>
//         </div>
//       </main>
//       <footer className="footer">
//         <p>Contact us: Phone: XXX-XXX-XXXX | Email: example@example.com</p>
//         <ul>
//           <li>Terms of Service</li>
//           <li>Privacy Policy</li>
//           <li>About Us</li>
//           <li>FAQs</li>
//         </ul>
//       </footer>
//     </div>
//   );
// }

// export default Home;
// Home.js

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
        <Link to="/Dashboard" className="nav-link"><h2>Dashboard</h2></Link>
        </div>
        <div className="featured-products">
        <Link to="/Featured Products" className="nav-link"><h2>Featured Products</h2></Link>
        </div>
        <div className="quick-links">
        <Link to="/Quick Links" className="nav-link"><h2>Quick Links</h2></Link>
        </div>
        <div className="news-announcements">
        <Link to="/News and Announcements" className="nav-link"><h2>News and Announcements</h2></Link>
        </div>
      </div>
      <footer className="foot">
        <p>Contact us: Phone: XXX-XXX-XXXX | Email: example@example.com</p>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>FAQs</li>
        </ul>
      </footer>
    </div>
  );
}

export default Home;
