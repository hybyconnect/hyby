import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const tabs = ["Web Development", "Meta Ads", "Graphic Design", "UI UX"];

const projects = [
  {
    id: 1,
    name: "Maw Care",
    category: "Animal Care",
    price: "50k Rupees",
    image: `${assets.mawlanding}`, // Replace with actual image path
  },
  {
    id: 2,
    name: "Medicare",
    category: "Health",
    price: "50k Rupees",
    image: `${assets.webdev}`,
  },
  {
    id: 3,
    name: "Nike",
    category: "E-Commerce",
    price: "50k Rupees",
    image: `${assets.software2}`,
  },
];

const graphicDesignProjects = [
    {
      id: 101,
      name: "Logo Designing",
      description: "Bringing Your Brand to Life With Stunning Logos",
      price: "Starting From ₹2999",
      discount: "10% Off",
      image: `${assets.GD1}`, // Replace with actual image
    },
    {
      id: 102,
      name: "Identity Branding",
      description: "Crafting Unique Identities, Elevating Your Brand",
      price: "Starting From ₹2999",
      image: `${assets.GD2}`,
    },
    {
      id: 103,
      name: "Motion Designing",
      description: "Bringing Stories To Life With Dynamic Motion Graphics",
      price: "Starting From ₹2999",
      image: `${assets.GD3}`,
    },
  ];

  const metaAdsProjects = [
    {
      id: 201,
      name: "Social Media Ads",
      description: "Drive conversions with targeted social campaigns",
      price: "Starting From ₹9999",
      discount: "15% Off",
      image: `${assets.metad1}`,
    },
    {
      id: 202,
      name: "Lead Generation",
      description: "Capture quality leads with precision targeting",
      price: "Starting From ₹14999",
      image: `${assets.meta2}`,
    },
    {
      id: 203,
      name: "Brand Awareness",
      description: "Boost your brand visibility across platforms",
      price: "Starting From ₹19999",
      image: `${assets.meta3}`,
    },
  ];
  
  const uiUxProjects = [
    {
      id: 301,
      name: "App Interface Design",
      description: "Creating intuitive mobile experiences",
      price: "Starting From ₹14999",
      discount: "20% Off",
      image: `${assets.ui1}`,
    },
    {
      id: 302,
      name: "Web UX Design",
      description: "User-centered website experiences",
      price: "Starting From ₹12999",
      image: `${assets.ui2}`,
    },
    {
      id: 303,
      name: "Prototyping",
      description: "Interactive prototypes for perfect user flows",
      price: "Starting From ₹8999",
      image: `${assets.ui3}`,
    },
  ];

const Service = () => {
  const [activeTab, setActiveTab] = useState("Web Development");
  const [selectedProjects, setSelectedProjects] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  const toggleSelectProject = (projectId) => {
    setSelectedProjects((prevSelected) =>
      prevSelected.includes(projectId)
        ? prevSelected.filter((id) => id !== projectId)
        : [...prevSelected, projectId]
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Web Development":
        return (
          <div className=" flex flex-wrap justify-center flex-col gap-5">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform ${
                  selectedProjects.includes(project.id) ? "border-4 border-green-500" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="absolute top-3 left-3 text-yellow-500 text-xl cursor-pointer"
                />

                <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
                  <FontAwesomeIcon icon={faTag} className="mr-1" /> {project.price}
                </div>

                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-pink-600 font-medium text-sm mb-4">
                    {project.category}
                  </p>

                  <div className="flex justify-between items-center">
                    <button
                    onClick={() => navigate("/DS-Products")}
                    className="px-4 py-2 w-[175px] bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600">
                      View
                    </button>
                    <button
                      onClick={() => toggleSelectProject(project.id)}
                      className={`px-4 py-2 w-[175px] border-2 font-semibold rounded-full transition ${
                        selectedProjects.includes(project.id)
                          ? "bg-green-500 text-white"
                          : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                      }`}
                    >
                      {selectedProjects.includes(project.id) ? "Selected" : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
      case "Meta Ads":
        return <div>
        <h2 className="text-xl font-bold flex justify-start text-center mb-8">
          Amplify your reach with data-driven advertising solutions
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {metaAdsProjects.map((project) => (
            <div key={project.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
              {project.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
                  {project.discount}
                </div>
              )}

              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-green-600 font-semibold mb-4">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
        </div>;
      case "Graphic Design":
        return <div>
        <h2 className="text-xl font-bold flex justifu-start text-center mb-8">Bringing your vision to life with creative and impactful Design</h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {graphicDesignProjects.map((project) => (
            <div key={project.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
              {project.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
                  {project.discount}
                </div>
              )}
      
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-green-600 font-semibold mb-4">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      case "UI UX":
        return <div>
        <h2 className="text-xl font-bold text-center mb-8">
          Crafting intuitive experiences that users love
        </h2>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {uiUxProjects.map((project) => (
            <div key={project.id} className="relative bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
              {project.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
                  {project.discount}
                </div>
              )}

              <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />

              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                <p className="text-green-600 font-semibold mb-4">{project.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      default:
        return null;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Creative Service Projects</h2>

      <div className="flex space-x-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg flex justify-between font-semibold ${
              activeTab === tab
                ? "bg-gray-400 text-black"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {renderContent()}
    </div>
  );
};

export default Service;
