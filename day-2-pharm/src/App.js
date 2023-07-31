import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LoginPage from "./Assets/Components/Login";

import Home from "./Assets/Components/Home/Home";
import Inventory from "./Assets/Components/Inventory/Inventory";
import PharmacyDashboard from "./Assets/Components/PharmacyDashboard/PharmacyDashboard";
import FeaturedProducts from "./Assets/FeaturedProduct/FeaturedProducts";



function App()
{
  return(
    <div className="App">
   <BrowserRouter>
    <Routes>
    
        <Route path="/" element={<LoginPage/>}/>
    
        <Route path="/nav" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/Inventory" element={<Inventory/>}/>
        <Route path="/Dashboard" element={<PharmacyDashboard/>}/>
        <Route path="/Featured Products" element={<FeaturedProducts/>}/>
      
  
    </Routes>
   </BrowserRouter>

    </div>
  );
}
export default App