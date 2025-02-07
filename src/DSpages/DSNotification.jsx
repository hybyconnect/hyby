import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSNotification = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <DSNavbar />
      <div>
        <div className="p-4">
          <div className="space-y-2">
            <details className="cursor-pointer">
              <summary className="text-gray-800 font-medium">
                Report a Problem Here
              </summary>
            </details>
            <details className="cursor-pointer">
              <summary className="text-gray-800 font-medium">Support</summary>
            </details>
          </div>

          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Notifications{" "}
              <span className="text-red-500 text-sm">(New 2)</span>
            </h2>
          </div>
        </div>
      </div>
      <DSFooter />
    </div>
  );
};

export default DSNotification;
