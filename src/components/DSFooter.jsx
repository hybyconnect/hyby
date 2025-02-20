import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [selected, setSelected] = useState(location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
    setSelected(location.pathname); // Update selected when location changes
  }, [location.pathname]);

  const menuItems = [
    { name: "HOME", icon: "fa-home", path: "/digital-services" },
    { name: "PROJECTS", icon: "fa-chart-bar", path: "/DSProjects" },
    { name: "OFFER", icon: "fa-percent", path: "/DSoffer" },
    { name: "SERVICES", icon: "fa-cogs", path: "/DSServices" },
    { name: "MENU", icon: "fa-list-ul", path: "/DSContact" },
  ];

  const handleSelect = (path) => {
    setSelected(path);
  };

  return (
    <>
      {/* Footer */}
      <div className="bg-white shadow-t fixed bottom-0 left-0 w-full z-50">
        <div className="container mx-auto max-w-5xl flex justify-between items-center p-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center cursor-pointer ${
                selected === item.path ? "text-yellow-500" : "text-gray-800"
              }`}
              onClick={(e) => {
                if (item.name === "MENU") {
                  e.preventDefault();
                  setIsSidebarOpen(true); // Open sidebar
                } else {
                  handleSelect(item.path); // Normal navigation
                }
              }}
            >
              <i className={`fas ${item.icon} text-xl lg:text-2xl`}></i>
              <span className="text-[10px] font-medium">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay (Click Outside to Close) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Contact Sidebar */}
      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-[calc(100vh-64px)] z-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute top-0 right-0 h-full w-64 bg-white bg-opacity-90 shadow-lg"
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
        >
          <div className="p-4">
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ×
            </button>
            <div className="flex justify-center items-center  flex-col">
            <h2 className=" text-xl md:text-2xl text-yellow-500 font-bold pt-8 mb-4">Get More</h2>
            <Link to={"/digital-services"} className="text-lg md:text-xl font-semibold hover:text-yellow-500 mb-2">Home</Link>
            <Link to={"/DSProjects"} className="text-lg md:text-xl font-semibold hover:text-yellow-500 mb-2">Projects</Link>
            <Link to={"/DSoffer"} className="text-lg md:text-xl font-semibold hover:text-yellow-500 mb-2">Offer</Link>
            <Link to={"/DSServices"} className="text-lg md:text-xl font-semibold hover:text-yellow-500 mb-2">Services</Link>
            
            <ul className=" text-lg text-center pt-16">
              <li className="hover:text-yellow-500">About Us</li>
              <li className="cursor-pointer hover:text-yellow-500"><a href="/DSContact">Contact Us</a></li>
              <li className="hover:text-yellow-500"> <u>Term and Conditions </u></li>
              <li className="hover:text-yellow-500"><u>Privacy Policy </u> </li>
              <li className="hover:text-yellow-500">Career</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;