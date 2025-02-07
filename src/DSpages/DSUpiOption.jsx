import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSUpiOption = () => {
  const [upiDetails, setUpiDetails] = useState({
    upiId: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUpiDetails({ ...upiDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DSPaymentDone"); // Or wherever you want to navigate
  };

  const handleCancelOrder = () => {
    navigate("/digital-services"); // Or your home route
  };

  return (
    <div className="max-w-3xl mx-auto">
      <DSNavbar />
      <div className="relative bg-white mt-10 shadow-lg rounded-lg p-6">
        <div className="absolute bg-yellow-400 top-0 left-0 w-full h-2 rounded-t-lg">
          <div className="bg-green-600 h-full w-2/3 rounded-t-lg"></div>{" "}
          {/* Adjust progress */}
        </div>
        <header className="text-center bg-yellow-400 text-white py-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">UPI</h2>
        </header>
        <div className="m-10 px-4">
          <div className="flex justify-center">
            <img
              src={assets.mawlanding2} // Or the correct image path
              alt="Creative Landing Page"
              className="mb-4 rounded-lg w-34 h-34"
            />
          </div>
          <h3 className="font-bold text-xl text-center">Creative Landing Page</h3>
          <p className="text-green-600 text-lg font-semibold text-center">999 ₹</p>

          <form onSubmit={handleSubmit}>
            <div className="mt-6">
              <label
                htmlFor="upiId"
                className="block text-gray-700 font-medium"
              >
                UPI ID
              </label>
              <input
                type="text"
                id="upiId"
                name="upiId"
                value={upiDetails.upiId}
                onChange={handleInputChange}
                className="mt-1 p-3 border rounded-md w-full"
                placeholder="Enter your UPI ID"
                required
              />
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="bg-green-500 text-white w-full py-3 rounded-xl hover:bg-green-600 font-medium"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={handleCancelOrder}
                className="bg-red-500 text-white w-full py-3 rounded-xl mt-4 hover:bg-red-600 font-medium"
              >
                Cancel Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <DSFooter />
    </div>
  );
};

export default DSUpiOption;