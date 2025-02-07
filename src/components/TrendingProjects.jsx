import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solidBookmark } from "@fortawesome/free-solid-svg-icons";
import { faBookmark as regularBookmark } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Cart from "./Cart"; // Import the Cart component

const TrendingProjects = () => {
  const [likedCards, setLikedCards] = useState({});
  const [savedCards, setSavedCards] = useState({});
  const [selectedCards, setSelectedCards] = useState({});
  const [selectedProjects, setSelectedProjects] = useState([]);

  const cards = [
    {
      id: 1,
      name: "Ambient Weather",
      image: `${assets.weather}`,
      category: "UI Ux Designing",
    },
    {
      id: 2,
      name: "Hyby Connect Logo",
      image: `${assets.logo}`,
      category: "Logo Designing",
    },
    {
      id: 3,
      name: "Ambient",
      image: `${assets.project1}`,
      category: "UI Ux Design",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleLike = (id) => {
    setLikedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSave = (id) => {
    setSavedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSelect = (id) => {
    setSelectedCards((prev) => ({ ...prev, [id]: !prev[id] }));
    const selectedProject = cards.find((card) => card.id === id);
    if (selectedCards[id]) {
      setSelectedProjects((prev) => prev.filter((project) => project.id !== id));
    } else {
      setSelectedProjects((prev) => [...prev, selectedProject]);
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Slider {...sliderSettings}>
        {cards.map((card) => (
          <div key={card.id} className="p-2 sm:p-1">
            <div className="bg-white shadow-md rounded-md overflow-hidden relative scale-95 md:scale-90 sm:max-w-[250px] mx-auto transition-transform">
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-32 md:h-48 sm:h-28 object-cover"
              />
              <div className="p-3 sm:p-2">
                <h3 className="text-[22px] md:text-[20px] font-semibold text-center">
                  {card.name}
                </h3>
                <p className="text-gray-600 text-center text-md md:text-md text-pink-500 mt-1">
                  {card.category}
                </p>

                <div className="flex justify-between gap-6 mt-2">
                  <button
                    onClick={() => toggleSelect(card.id)}
                    className={`px-4 py-2 w-full mt-2  text-green-600 border border-green-600 font-semibold rounded-full transition-all ${
                      selectedCards[card.id]
                        ? "bg-green-600 text-white"
                        : "hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {selectedCards[card.id] ? "Selected" : "Select"}
                  </button>

                  <button
                    onClick={() => toggleSave(card.id)}
                    className="text-yellow-500 px-1 text-3xl lg:text-md mr-1 focus:outline-none"
                  >
                    <FontAwesomeIcon
                      icon={savedCards[card.id] ? solidBookmark : regularBookmark}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Render the Cart component */}
      <Cart selectedProjects={selectedProjects} />
    </div>
  );
};

export default TrendingProjects;