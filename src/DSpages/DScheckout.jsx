import React from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import assets from "../assets/assets";

import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DScheckout = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle the Continue button click
  const handleContinue = () => {
    navigate("/DSPaymentOption"); // Navigate to the DSPaymentOption route
  };

  // Function to handle the Cancel Order button click
  const handleCancel = () => {
    navigate("/DSProjects"); // Navigate to the DSProjectPage route
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <DSNavbar />
        
        <div className="relative bg-white mt-10 shadow-lg rounded-lg p-6">
          {/* Progress Bar */}
          <div className="absolute bg-yellow-400 top-0 left-0 w-full h-2 rounded-t-lg">
            <div className="bg-green-600 h-full w-1/3 rounded-t-lg" style={{ width: "33.33%" }}></div> {/* Adjusted width */}
          </div>

          {/* Header */}
          <header className="text-center bg-yellow-400 text-white py-4 rounded-t-lg">
            <h2 className="text-xl font-semibold ">Checkout</h2>
          </header>

          {/* Content */}
          <div className="text-center m-10 px-4">
            <img
              src={assets.mawlanding2}
              alt="Creative Landing Page"
              className="mx-auto mb-4 rounded-lg"
            />
            <h3 className="font-bold text-xl">Creative Landing Page</h3>
            <p className="text-green-600 text-lg font-semibold">50,000 ₹</p>
            <div className="mt-4 mb-6">
              <p className="text-gray-700">
                Order No.: <span className="text-orange-600">65830-38-884</span>
              </p>
              <p className="text-gray-700">Platform Fee: 12.99 ₹</p>
              <p className="text-gray-700">Discount: -99 ₹</p>
              <h3 className="text-xl font-bold mt-2">Total: 50,012 ₹</h3>
            </div>

            {/* Buttons */}
            <button
              onClick={handleContinue}  // Call the handleContinue function on click
              className="bg-green-500 text-white w-full py-2 rounded-xl mt-4 hover:bg-green-600"
            >
              Continue
            </button>
            <button
              onClick={handleCancel}  // Call the handleCancel function on click
              className="bg-red-500 text-white w-full py-2 rounded-xl mt-4 hover:bg-red-600"
            >
              Cancel Order
            </button>
          </div>
        </div>
      </div>
      <DSFooter />
    </>
  );
};

export default DScheckout;
