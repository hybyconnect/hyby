import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSCardDetails = () => { // Removed onNext from props
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 16) {
      value = value.slice(0, 16);
    }
    setCardDetails({ ...cardDetails, cardNumber: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DSPaymentDone"); // This will redirect to DSPaymentDone
  };

  const handleCancelOrder = () => {
    navigate("/digital-services"); // Redirect to the digital services page
  };

  return (
    <div className="max-w-5xl mx-auto">
      <DSNavbar />
      <div className="relative bg-white mt-10 shadow-lg rounded-lg p-6">
        <div className="absolute bg-yellow-400 top-0 left-0 w-full h-2 rounded-t-lg">
          <div className="bg-green-600 h-full w-3/4 rounded-t-lg"></div>
        </div>
        <header className="text-center bg-yellow-400 text-white py-4 rounded-t-lg">
          <h2 className="text-xl font-semibold">Card Details</h2>
        </header>
        <div className="m-10 px-4">
          <div className="flex justify-center">
            <img
              src={assets.mawlanding2}
              alt="Creative Landing Page"
              className="mb-4 rounded-lg w-34 h-34"
            />
          </div>
          <h3 className="font-bold text-xl text-center">Creative Landing Page</h3>
          <p className="text-green-600 text-lg font-semibold text-center">999 ₹</p>

          <form onSubmit={handleSubmit}> {/* Form with onSubmit handler */}
            <div className="mt-6">
              <label htmlFor="cardNumber" className="block text-gray-700 font-medium">
                Card No.
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardNumberChange}
                className="mt-1 p-3 border rounded-md w-full"
                placeholder="3456 5566 6726 9987"
                required // Added required attribute
              />
            </div>

            <div className="mt-4">
              <label htmlFor="cardName" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="cardName"
                name="cardName"
                value={cardDetails.cardName}
                onChange={handleInputChange}
                className="mt-1 p-3 border rounded-md w-full"
                placeholder="Bhupender Sharma"
                required // Added required attribute
              />
            </div>

            <div className="mt-4 flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="expiry" className="block text-gray-700 font-medium">
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  name="expiry"
                  value={cardDetails.expiry}
                  onChange={handleInputChange}
                  className="mt-1 p-3 border rounded-md w-full"
                  placeholder="MM/YY"
                  required // Added required attribute
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="cvv" className="block text-gray-700 font-medium">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  value={cardDetails.cvv}
                  onChange={handleInputChange}
                  className="mt-1 p-3 border rounded-md w-full"
                  placeholder="456"
                  required // Added required attribute
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-yellow-400"
                  // Remove checked and onChange
                />
                <span className="ml-2 text-gray-700">Save Card</span>
              </label>
            </div>

            <div className="mt-8">
              <button
                type="submit" // Submit button
                className="bg-green-500 text-white w-full py-3 rounded-xl hover:bg-green-600 font-medium"
              >
                Continue
              </button>
              <button
                type="button" // Cancel button
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

export default DSCardDetails;
