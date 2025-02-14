import React from "react";
import {  Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import DSHome from "../DSpages/DSHome";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";







const DSMainContent = () => {
  return (
    
    
    <div className="bg-gradient-to-b from-purple-100 via-white to-gray-100 min-h-screen no-scrollbar scroll-smooth flex flex-col items-center overflow-x-hidden">
      <div className="container mx-auto bg-gray-100 max-w-5xl">
        <DSNavbar />
        <Routes>
          <Route path="/" element={<DSHome />} />
          
          
        </Routes>
        
        <DSFooter />

      </div>
    </div>
  
);
}

export default DSMainContent