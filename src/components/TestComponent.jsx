import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faTag } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";

const tabs = ["Web Development", "Meta Ads", "Graphic Design", "UI UX"];

const projectsData = {
  "Web Development": [
    { id: 1, name: "Maw Care", price: "50k Rupees", image: assets.mawlanding },
    { id: 2, name: "Medicare", price: "50k Rupees", image: assets.webdev },
    { id: 3, name: "Nike", price: "50k Rupees", image: assets.software2 },
    { id: 4, name: "Medicare", price: "50k Rupees", image: assets.mawcare },
  ],
  "Graphic Design": [
    { id: 101, name: "Logo Designing", price: "Starting From ₹2999", image: assets.GD1 },
    { id: 102, name: "Identity Branding", price: "Starting From ₹2999", image: assets.GD2 },
    { id: 103, name: "Motion Designing", price: "Starting From ₹2999", image: assets.GD3 },
  ],
  "Meta Ads": [
    { id: 201, name: "Social Media Ads", price: "Starting From ₹9999", image: assets.metad1 },
    { id: 202, name: "Lead Generation", price: "Starting From ₹14999", image: assets.meta2 },
    { id: 203, name: "Brand Awareness", price: "Starting From ₹19999", image: assets.meta3 },
  ],
  "UI UX": [
    { id: 301, name: "App Interface Design", price: "Starting From ₹14999", image: assets.ui1 },
    { id: 302, name: "Web UX Design", price: "Starting From ₹12999", image: assets.ui2 },
    { id: 303, name: "Prototyping", price: "Starting From ₹8999", image: assets.ui3 },
  ],
};

const trendingCards = [
  {
    id: 401,
    name: "Ambient Weather",
    image: assets.weather,
    category: "UI Ux Designing",
    price: "₹14999"
  },
  {
    id: 402,
    name: "Hyby Connect Logo",
    image: assets.logo,
    category: "Logo Designing",
    price: "₹2999"
  },
  {
    id: 403,
    name: "Ambient",
    image: assets.project1,
    category: "UI Ux Design",
    price: "₹12999"
  },
];

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

const Service = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [selectedProjects, setSelectedProjects] = useState([]);
  const navigate = useNavigate();

  const toggleSelectProject = (project) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.find((item) => item.id === project.id)
        ? prevSelected.filter((item) => item.id !== project.id)
        : [...prevSelected, project]
    );
  };

  const renderProjects = (projects) =>
    projects.map((project) => (
      <div key={project.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
        <FontAwesomeIcon
          icon={faBookmark}
          className="absolute top-3 left-3 text-yellow-500 text-xl cursor-pointer"
        />

        <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
          <FontAwesomeIcon icon={faTag} className="mr-1" /> {project.price}
        </div>

        <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />

        <div className="p-4">
          <h3 className="text-lg md:text-xl font-semibold mb-2">{project.name}</h3>
          
          <div className="flex justify-between gap-4 items-center">
            <button
              onClick={() => navigate("/DS-Products")}
              className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow hover:bg-green-600"
            >
              View
            </button>
            <button
              onClick={() => toggleSelectProject(project)}
              className={`px-4 py-2 text-sm border-2 font-semibold rounded-full transition ${
                selectedProjects.find((item) => item.id === project.id)
                  ? "bg-green-500 text-white"
                  : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
              }`}
            >
              {selectedProjects.find((item) => item.id === project.id) ? "Selected" : "Select"}
            </button>
          </div>
        </div>
      </div>
    ));

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* Trending Projects Section */}
      <div className="max-w-5xl mx-auto bg-gray-100  rounded-lg shadow-md">
        <h3 className="text-xl md:text-2xl font-bold ml-2 mb-4">Trending Projects</h3>
        <Slider {...sliderSettings}>
          {trendingCards.map((card) => (
            <div key={card.id} className="">
              <div className="bg-white shadow-md rounded-md overflow-hidden relative scale-95 md:scale-90 md:max-w-[350px] mx-auto transition-transform hover:scale-95">
                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
                  <FontAwesomeIcon icon={faTag} className="mr-1" /> {card.price}
                </div>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-full h-32 md:h-48 sm:h-28 object-contain md:object-cover"
                />
                <div className="p-3 sm:p-2">
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-center">
                    {card.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm md:text-md text-pink-500 mt-1">
                    {card.category}
                  </p>
                  <div className="flex justify-center items-center gap-4 mt-4">
                    <button
                      onClick={() => toggleSelectProject(card)}
                      className={`px-4 py-2 text-sm border-2 w-full font-semibold rounded-full transition ${
                        selectedProjects.find((item) => item.id === card.id)
                          ? "bg-green-500 text-white"
                          : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      }`}
                    >
                      {selectedProjects.find((item) => item.id === card.id) ? "Selected" : "Select"}
                    </button>
                    <button
                      onClick={() => navigate("/DS-Products")}
                      className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow hover:bg-green-600"
                    >
                      View
                    </button>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Tabs for project categories */}
      <h2 className="text-xl md:text-2xl font-bold ml-2 mt-8 mb-6">Creative Service Projects</h2>
      <div className="overflow-x-auto whitespace-nowrap mb-6">
        <div className="flex space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg flex text-sm md:text-md justify-between font-semibold ${
                activeTab === tab ? "bg-gray-400 text-black" : "bg-gray-200 text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Render selected project tab */}
      <div className="grid gap-4 grid-cols-1 md:grid-rows-3">
        {renderProjects(projectsData[activeTab])}
      </div>

      {/* Cart Preview */}
      {selectedProjects.length > 0 && (
        <div className="fixed bottom-14 left-0 right-0 bg-yellow-200 shadow-lg p-4 z-50 flex justify-between items-center max-w-3xl mx-auto rounded-t-lg">
          <div className="text-pink-600 font-semibold">
            {selectedProjects.map((project) => project.name).join(", ")}
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="px-4 py-2 bg-green-500 text-white text-sm md:text-md font-semibold rounded-lg shadow hover:bg-green-600"
          >
            View Cart ({selectedProjects.length} Items)
          </button>
        </div>
      )}

      {/* Footer */}
      <div className="bg-yellow-600 shadow-t fixed bottom-0 left-0 w-full z-40">
        <div className="container mx-auto max-w-3xl flex justify-between items-center p-2">
          <div className="text-gray-800">Delivery</div>
          <div className="text-gray-800">Dining</div>
          <div className="text-gray-800">Live</div>
        </div>
      </div>
      <div className="py-12 bg-gray-100"></div>
    </div>
  );
};

export default Service;