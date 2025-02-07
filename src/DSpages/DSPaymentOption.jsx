import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";  // Import the useNavigate hook
import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSPaymentOption = () => {
  const navigate = useNavigate(); // Initialize the navigate function
  const [paymentMethods, setPaymentMethods] = useState([
    { name: "Credit/Debit Card", selected: true },
    { name: "Net Banking", selected: false },
    { name: "Upi", selected: false },
  ]);

  const [darkMode, setDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    // Check local storage for dark mode preference on mount
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
      document.body.classList.add("dark"); // Add dark mode class to body
    }
  }, []);

  useEffect(() => {
    // Save dark mode preference to local storage whenever it changes
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const handlePaymentMethodSelect = (index) => {
    setPaymentMethods((prevMethods) =>
      prevMethods.map((method, i) => ({
        ...method,
        selected: i === index,
      }))
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Function to handle the Continue button click
  const handleContinue = () => {
    const selectedPayment = paymentMethods.find(method => method.selected);
    
    if (selectedPayment.name === "Net Banking") {
      navigate("/NetbankingOption"); // Navigate to NetbankingOption route
    } else if (selectedPayment.name === "Upi") {
      navigate("/UpiOption"); // Navigate to UPI route
    } else {
      navigate("/DSCardDetails"); // Navigate to the DSCheckout route
    }
  };

  // Function to handle the Cancel Order button click
  const handleCancel = () => {
    navigate("/DSProjects"); // Navigate to the DSProjectPage route
  };

  return (
    <>
      <div className={`max-w-3xl mx-auto ${darkMode ? 'dark' : ''}`}> {/* Conditional class */}
        <DSNavbar />

        <div className="relative bg-white mt-10 shadow-lg rounded-lg p-6 transition-colors duration-300 dark:bg-gray-800 dark:text-white">
          {/* Progress Bar */}
          <div className="absolute bg-yellow-400 top-0 left-0 w-full h-2 rounded-t-lg">
            <div className="bg-green-600 h-full w-2/3 rounded-t-lg"></div>
          </div>

          {/* Header */}
          <header className="text-center bg-yellow-400 text-white py-4 rounded-t-lg transition-colors duration-300 dark:bg-gray-700">
            <h2 className="text-xl font-semibold">Payment Option</h2>
          </header>

          {/* Content */}
          <div className="m-10 px-4 transition-colors duration-300 dark:bg-gray-800 dark:text-white">
            <div className="flex justify-center">
              <img
                src={assets.mawlanding2}
                alt="Creative Landing Page"
                className="mb-4 rounded-lg w-34 h-34 transition-colors duration-300 dark:invert dark:bg-white" 
              />
            </div>
            <h3 className="font-bold text-xl text-center">Creative Landing Page</h3>
            <p className="text-green-600 text-lg font-semibold text-center">999 ₹</p>

            <p className="mt-4 text-gray-700 text-center transition-colors duration-300 dark:text-gray-400">
              Let's complete your order.<br />
              Please choose your payment method.
            </p>

            <div className="mt-6">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  onClick={() => handlePaymentMethodSelect(index)} // Add click handler
                  className={`border rounded-md p-3 mb-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300 dark:border-gray-700 dark:hover:bg-gray-700 dark:bg-gray-800 ${
                    method.selected ? "border-yellow-400" : "" // Highlight selected method
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium transition-colors duration-300 dark:text-white">{method.name}</span>
                    <div className="rounded-full w-4 h-4 bg-gray-300 ml-2 transition-colors duration-300 dark:bg-gray-600">
                      {method.selected && <div className="rounded-full w-full h-full bg-yellow-400"></div>}
                    </div>
                  </div>
                  {method.name === "Upi" && (
                    <p className="text-gray-500 text-sm mt-1 transition-colors duration-300 dark:text-gray-500">
                      E.G., Google Pay, PhonePe, Paytm
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8">
              <button
                onClick={handleContinue} // Call the handleContinue function on click
                className="bg-green-500 text-white w-full py-3 rounded-xl hover:bg-green-600 font-medium transition-colors duration-300 dark:bg-green-600 dark:hover:bg-green-700"
              >
                Continue
              </button>
              <button
                onClick={handleCancel} // Call the handleCancel function on click
                className="bg-red-500 text-white w-full py-3 rounded-xl mt-4 hover:bg-red-600 font-medium transition-colors duration-300 dark:bg-red-600 dark:hover:bg-red-700"
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed bottom-8 right-8 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.364 5.636l-.707-.707M19.364 5.636l-.707.707M6.364 18.364l-.707.707"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>
      <DSFooter />
    </>
  );
};

export default DSPaymentOption;
