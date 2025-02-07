import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    id: 1,
    name: "Maw Care",
    category: "Animal Care",
    price: "50k Rupees",
    image: "path-to-image-1", // Replace with actual image path
  },
  {
    id: 2,
    name: "Medicare",
    category: "Health",
    price: "50k Rupees",
    image: "path-to-image-2",
  },
  {
    id: 3,
    name: "Nike",
    category: "E-Commerce",
    price: "50k Rupees",
    image: "path-to-image-3",
  },
];

const WebdevProject = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Bookmark Icon */}
            <FontAwesomeIcon
              icon={faBookmark}
              className="absolute top-3 left-3 text-yellow-500 text-xl cursor-pointer"
            />

            {/* Price Tag */}
            <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-sm font-semibold rounded-lg">
              <FontAwesomeIcon icon={faTag} className="mr-1" /> {project.price}
            </div>

            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />

            {/* Project Info */}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-pink-600 font-medium text-sm mb-4">
                {project.category}
              </p>

              {/* Action Buttons */}
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full shadow hover:bg-green-600">
                  View
                </button>
                <button className="px-4 py-2 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-500 hover:text-white transition">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebdevProject;
