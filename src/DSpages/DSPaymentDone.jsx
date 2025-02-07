import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import assets from "../assets/assets"; // Assuming you have your assets imported
import Navbar from "../components/Navbar"; // And your Navbar component
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSPaymentDone = () => {
  const navigate = useNavigate(); // Initialize navigate

  // Logic for "My Orders" button
  const handleMyOrders = () => {
    navigate("/DSProjects"); // Navigate to the My Orders page
  };

  // Logic for "Go to Home" button
  const handleGoHome = () => {
    navigate("/digital-services"); // Navigate to the Home page
  };

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <DSNavbar />

        <div className="relative bg-white mt-10 shadow-lg rounded-lg p-6">
          {/* Progress Bar */}
          <div className="absolute bg-yellow-400 top-0 left-0 w-full h-2 rounded-t-lg">
            <div className="bg-green-600 h-full w-full rounded-t-lg"></div> {/* Full progress */}
          </div>

          {/* Header */}
          <header className="text-center bg-yellow-400 text-white py-4 rounded-t-lg">
            <h2 className="text-xl font-semibold">Order Completed</h2>
          </header>

          {/* Content */}
          <div className="m-10 px-4 text-center"> {/* Center content */}
            <img
              src={assets.mawlanding2} // Replace with your actual image path
              alt="Creative Landing Page"
              className="mx-auto mb-4 rounded-lg w-34 h-34" // Adjust size as needed
            />
            <h3 className="font-bold text-xl">Creative Landing Page</h3>
            <p className="text-gray-600 text-sm mb-6">HTML,CSS,JS,</p> {/* Added text-gray-600 */}

            <p className="text-lg font-medium mb-4">
              Your payment was successful! <br />
              Thank you for your purchase
            </p>

            <div className="flex justify-center mb-6"> {/* Center the image */}
              <img src={assets.emailEnv} alt="Email" className="w-48" /> {/* Replace with your email image path */}
            </div>

            <p className="text-gray-600 mb-6">
              Your Order No. 65830-38-884. <br />
              Files have been sent to your Email
            </p>

            <div className="flex flex-col space-y-4"> {/* Use flex-col for vertical arrangement */}
              <button
                onClick={handleMyOrders} // Call the handleMyOrders function on click
                className="bg-yellow-400 text-white py-3 rounded-xl font-medium"
              >
                My Orders
              </button>
              <button
                onClick={handleGoHome} // Call the handleGoHome function on click
                className="bg-gray-300 text-gray-700 py-3 rounded-xl font-medium"
              >
                Go To Home
              </button>
            </div>
          </div>
        </div>
      </div>
      <DSFooter />
    </>
  );
};

export default DSPaymentDone;
