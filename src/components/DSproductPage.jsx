import React, { useState } from "react";
import assets from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const DSproductPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const images = [
    assets.mawcare,
    assets.mawcare,
    assets.mawcare,
    assets.mawcare,
    assets.mawlanding,
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // State for image preview modal

  const handleImageClick = (index) => {
    setCurrentImage(index);
  };

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="bg-gray-100 max-w-3xl mx-auto">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center py-8 px-4 bg-gray-100">
          <div className="w-full">
            {/* Header Section */}
            <div className="rounded-2xl shadow-lg overflow-hidden bg-white relative">
              {/* Background Section */}
              <div
                className="h-56 flex justify-between items-end p-5 bg-cover bg-center"
                style={{ backgroundImage: `url(${assets.mawlanding})` }}
              >
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                  Creative Landing Page
                </h1>
                {/* Bookmark Button */}
                <button
                  onClick={toggleBookmark}
                  className="text-yellow-500 px-1 text-sm md:text-md lg:text-md mr-1 focus:outline-none"
                >
                  <FontAwesomeIcon
                    icon={isBookmarked ? solidBookmark : regularBookmark}
                    className={`w-8 h-10 ${isBookmarked ? "text-ye-800" : "text-yellow-600"}`}
                  />
                </button>
              </div>

              <div className="p-4">
                <p className="text-md md:text-md text-gray-600 mt-0">
                  Develop responsive WordPress websites and redesign them using
                  <span className="font-bold text-indigo-600"> HTML, CSS, JS</span>.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Are you looking for an amazing, unique website experience?
                </p>

                <div className="relative overflow-hidden rounded-xl">
                  <img
                    className="my-4 rounded-xl w-full transition-transform duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                    src={images[currentImage]}
                    alt={`Slide ${currentImage + 1}`}
                    onClick={openPreview} // Open preview on click
                  />
                </div>

                <div className="flex justify-center gap-2 mt-4">
                  {images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`w-12 h-12 rounded-md cursor-pointer transition-transform duration-300 hover:scale-110 ${
                        currentImage === index ? "border-2 border-yellow-400" : "border"
                      }`}
                      onClick={() => handleImageClick(index)}
                    />
                  ))}
                </div>

                <h2 className="text-lg md:text-lg font-semibold mt-4">What You Will Get:</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                  <li>WordPress Installation and Setup</li>
                  <li>Premium Theme</li>
                  <li>E-Commerce Functionality</li>
                  <li>SEO Optimized Site</li>
                  <li>Speed Optimization</li>
                  <li>Highly Secure Admin Panel</li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                    Recommended for You
                  </span>
                </div>

                <button
                  onClick={() => navigate("/DS-Checkout")}
                  className="mt-4 w-full bg-green-500 text-white text-lg py-2 rounded"
                >
                  Get in ₹50k
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={images[currentImage]}
              alt={`Preview ${currentImage + 1}`}
              className="w-full rounded-lg"
            />
            <button
              onClick={closePreview}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-2 hover:bg-gray-200"
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
        </div>
      )}
      <div className="py-10 bg-gray-100"></div>
    </div>
    

  );
};

export default DSproductPage;