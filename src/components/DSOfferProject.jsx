import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";

const DSOfferProject = () => {
  const [selectedOffers, setSelectedOffers] = useState([]);
  const navigate = useNavigate();

  const serviceOffers = [
    {
      id: 1,
      name: "App Development",
      image: `${assets.software2}`,
      category: "Valid Till 31st Jan",
      discount: "30% Off",
    },
    {
      id: 2,
      name: "Video Editing",
      image: `${assets.project1}`,
      category: "Less Than 10 Mins",
      discount: "30% Off",
    },
  ];

  const templateOffers = [
    {
      id: 3,
      name: "Maw Care",
      image: `${assets.mawcare}`,
      category: "Animal Care",
      discount: "10% Off",
      oldPrice: "₹10,000",
      newPrice: "₹8,999",
      offerExpiry: "This Offer Will Expire After 15 Feb 2025",
    },
    {
      id: 4,
      name: "Remont Krossovok",
      image: `${assets.logo}`,
      category: "Repair Services",
      discount: "10% Off",
      oldPrice: "₹12,000",
      newPrice: "₹10,800",
      offerExpiry: "This Offer Will Expire After 15 Feb 2025",
    },
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toggleSelect = (offer) => {
    setSelectedOffers((prev) =>
      prev.find((item) => item.id === offer.id)
        ? prev.filter((item) => item.id !== offer.id)
        : [...prev, offer]
    );
  };

  return (
    <div className="max-w-5xl mx-auto bg-gray-100 ">
      {/* Service Offers Section */}
      <h2 className="text-xl font-bold text-center my-4">
        Offers On Our Services
      </h2>
      <Slider {...sliderSettings}>
        {serviceOffers.map((card) => (
          <div key={card.id} className="p-2 m-1">
            <div className="bg-white shadow-md rounded-md overflow-hidden relative transition-transform">
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                {card.discount}
              </div>
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{card.name}</h3>
                <p className="text-sm text-gray-600">{card.category}</p>
                
                <div className="flex justify-between gap-2 mt-2">
                  <button
                    onClick={() => navigate("/DS-Products")}
                    className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow hover:bg-green-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => toggleSelect(card)}
                    className={`px-4 py-2 text-sm border-2 font-semibold rounded-full transition ${
                      selectedOffers.find((item) => item.id === card.id)
                        ? "bg-green-500 text-white"
                        : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {selectedOffers.find((item) => item.id === card.id) ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Template Offers Section */}
      <h2 className="text-xl font-bold text-center my-4">
        Website Templates Offers
      </h2>
      <Slider {...sliderSettings}>
        {templateOffers.map((card) => (
          <div key={card.id} className="p-4">
            <div className="bg-white shadow-md rounded-md overflow-hidden relative transition-transform">
              <div className="absolute top-2 right-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded-md">
                {card.discount}
              </div>
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-32 md:h-48 object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{card.name}</h3>
                <p className="text-sm text-gray-600">{card.category}</p>
                <p className="text-sm mt-1">
                  Price:{" "}
                  <span className="line-through text-gray-500">
                    {card.oldPrice}
                  </span>{" "}
                  <span className="text-green-600 font-bold">
                    {card.newPrice}
                  </span>
                </p>
                <p className="text-xs text-red-600 mt-1">
                  {card.offerExpiry}
                </p>

                <div className="flex justify-between gap-2 mt-4">
                  <button
                    onClick={() => navigate("/DS-Products")}
                    className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow hover:bg-green-600"
                  >
                    View
                  </button>
                  <button
                    onClick={() => toggleSelect(card)}
                    className={`px-4 py-2 text-sm border-2 font-semibold rounded-full transition ${
                      selectedOffers.find((item) => item.id === card.id)
                        ? "bg-green-500 text-white"
                        : "border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                    }`}
                  >
                    {selectedOffers.find((item) => item.id === card.id) ? "Selected" : "Select"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Cart Preview */}
      {selectedOffers.length > 0 && (
        <div className="fixed bottom-14 left-0 right-0 bg-yellow-200 shadow-lg p-4 z-50 flex justify-between items-center max-w-3xl mx-auto rounded-t-lg">
          <div className="text-pink-600 font-semibold">
            {selectedOffers.map((offer) => offer.name).join(", ")}
          </div>
          <button
            onClick={() => navigate("/checkout")}
            className="px-4 py-2 bg-green-500 text-white text-sm md:text-md font-semibold rounded-lg shadow hover:bg-green-600"
          >
            View Cart ({selectedOffers.length} Items)
          </button>
        </div>
      )}

      <div className=" bg-gray-100"></div>
    </div>
  );
};

export default DSOfferProject;