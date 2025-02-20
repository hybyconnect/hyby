import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import MainContent from "./pages/MainContent"; // Main content that includes the routes for Home and Fire
import DSMainContent from "./DSpages/DSMainContent";
import Fire from "./pages/Fire"; // Import the Fire component
import assets from "./assets/assets";
import "./index.css";
import Projects from "./pages/Projects";

import Share from "./pages/Share";
import { Login } from "./pages/Login";
import { SignupForm } from "./pages/SignupForm";
import Notifications from "./pages/Notification";
import DSoffer from "./DSpages/DSoffer";
import DSproductPage from "./components/DSproductPage";
import DSProducts from "./DSpages/DSProducts";
import DSProjectsPage from "./DSpages/DSProjectsPage";
import DScheckout from "./DSpages/DScheckout";
import DSNotification from "./DSpages/DSServicesPage";
import DSPaymentOption from "./DSpages/DSPaymentOption";
import DSPaymentDone from "./DSpages/DSPaymentDone";
import DSCardDetails from "./DSpages/DSCardDetails";
import DSNetBankingOpt from "./DSpages/DSNetBankingOpt";
import DSUpiOption from "./DSpages/DSUpiOption";
import DSCart from "./DSpages/DSCart";
import DSContactUs from "./DSpages/DSContactUs";
import DSServicesPage from "./DSpages/DSServicesPage";
import DSGraphicDesign from "./DSpages/DSGraphicDesign";
import DSVideoEditing from "./DSpages/DSVideoEditing";
import DSContentWriting from "./DSpages/DSContentWriting";
import DSWebDevelopment from "./DSpages/DSWebDevlopment";
import DSApp from "./DSpages/DSApp";
import DSUiUx from "./DSpages/DSUiUx";
import DSInfluencerMarketing from "./DSpages/DSInfulencerMarketing";
import DSMetaAds from "./DSpages/DSMetaAds";


// LoadingScreen Component: Displayed while the app is loading
const LoadingScreen = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-purple-100 via-white to-purple-100">
      {/* Logo */}
      <img
        src={assets.logo}
        alt="Logo"
        className="w-52 mb-8 object-cover ml-2"
      />
      {/* Loading Animation (Bouncing dots) */}
      <div className="flex items-center justify-center space-x-2 w-full">
        <span className="dot w-4 h-4 rounded-full bg-yellow-500 animate-bounce"></span>
        <span
          className="dot w-4 h-4 rounded-full bg-gray-500 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>
        <span
          className="dot w-4 h-4 rounded-full bg-yellow-500 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Hide loading screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Routes>
          {/* Define all Routes here */}
          <Route path="/" element={<Hero />} />
          <Route path="/influencer" element={<MainContent />} />
          <Route path="/fire" element={<Fire />} /> {/* Add route for Fire component */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignupForm />} />
          <Route path="/share" element={<Share />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/digital-services" element={<DSMainContent />} />
          <Route path="/DSoffer" element={<DSoffer />} />
          <Route path="/DS-Products" element={<DSProducts />} />
          <Route path="/DSprojects" element={<DSProjectsPage />} />
          <Route path="/DS-Checkout" element={<DScheckout />} />
          <Route path="/DSServices" element={<DSServicesPage />} />
          <Route path="/DSPaymentOption" element={<DSPaymentOption />} />
          <Route path="/DSPaymentDone" element={<DSPaymentDone />} />
          <Route path="/DSCardDetails" element={<DSCardDetails />} />
          <Route path="/NetbankingOption" element={<DSNetBankingOpt />} />
          <Route path="/UpiOption" element={<DSUpiOption />} />
          <Route path="/dscart" element={<DSCart />} />
          <Route path="/DSContact" element={<DSContactUs />} />
          <Route path="/services/graphics" element={<DSGraphicDesign />} />
          <Route path="/services/video" element={<DSVideoEditing />} />
          <Route path="/services/content" element={<DSContentWriting />} />
          <Route path="/services/web" element={<DSWebDevelopment />} />
          <Route path="/services/app" element={<DSApp />} />
          <Route path="/services/ui" element={<DSUiUx />} />
          <Route path="/services/influencer" element={<DSInfluencerMarketing />} />
          <Route path="/services/meta" element={<DSMetaAds />} />

          

        </Routes>
      )}
    </>
  );
};

export default App;
