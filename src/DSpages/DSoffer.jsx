import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import DSFooter from "../components/DSFooter";

import TrendingProjects from "../components/TrendingProjects";
import WebdevProject from "../components/WebdevProject";
import DSOfferProject from "../components/DSOfferProject";
import DSproductPage from "../components/DSproductPage";
import DSNavbar from "../components/DSNavbar";
import assets from "../assets/assets";
import TestComponent from "../components/TestComponent";

const Share = () => {
  
  
  return (
    <>
      <div className="max-w-5xl mx-auto bg-gray-100 ">
        <DSNavbar />
        <div className="h-[150px] p-2 flex justify-between bg-gray-100 shadow-md rounded  bg-yellow-400">
          <h2 className="text-white p-2"><span className="text-white p-2 text-bold text-5xl">Offers</span> <br /> <span className=" text-bold p-2">For You We Have <br /> <span className="pl-2">Some</span> </span> <span className="text-black text-bold text-xl">Exciting Offers</span></h2>
          <img src={assets.percent} alt="" />
         </div>
         

        <DSOfferProject />
        {/* <DSproductPage /> */}
        <TestComponent />
        <DSFooter />
        
        
        
        
      </div>
      
    </>
  );
};

export default Share;
