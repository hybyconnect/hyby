import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import assets from "../assets/assets";
import TestComponent from "../components/TestComponent";

import TrendingProjects from "../components/TrendingProjects";


import Service from "../components/Service";

const Home = () => {
  const [selected, setSelected] = useState(null);
  

  
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <div className="flex justify-center bg-gradient-to-b from-gray-100 to-purple-100">
        <div
          className="overflow-x-auto"
          style={{
            msOverflowStyle: "none", // IE and Edge
            scrollbarWidth: "none", // Firefox
          }}
        >
          
        </div>
      </div>
      <section className="p-4 bg-gradient-to-b from-gray-100 to-gray-100">
        
        <div className=" max-w-4xl mx-auto">
          <style>
            {`
              .slick-dots {
                bottom: -10px; /* Decrease this value to bring dots closer */
              }
              .slick-dots li button:before {
                color: #6b46c1; /* Custom color for the dots */
              }
            `}
          </style>
          <Slider {...sliderSettings}>
            {/* Slide 1 */}
            <div className=" p-2 flex justify-center to-purple-100">
              <img
                src={assets.software2}
                className="w-full rounded-lg text-center"
                alt="Influencer 1"
              />
            </div>
            {/* Slide 2 */}
            <div className="p-2  flex justify-center">
              <img
                src={assets.software2}
                className="w-full rounded-lg"
                alt="Influencer 2"
              />
            </div>
            {/* Slide 3 */}
            <div className="p-2 flex justify-center">
              <img
                src={assets.software2}
                className="w-full rounded-lg"
                alt="Influencer 3"
              />
            </div>
            {/* Slide 4 */}
            <div className="p-2 flex justify-center bg-gradient-b to-purple-100">
              <img
                src={assets.software2}
                className="w-full rounded-lg text-center"
                alt="Influencer 1"
              />
            </div>
            {/* Slide 5 */}
            <div className="p-2 flex justify-center">
              <img
                src={assets.software2}
                className="w-full rounded-lg"
                alt="Influencer 2"
              />
            </div>
            {/* Slide 6 */}
            <div className="p-2 flex justify-center">
              <img
                src={assets.software2}
                className="w-full rounded-lg"
                alt="Influencer 3"
              />
            </div>
          </Slider>
        </div>
      </section>
      <div className=" bg-gradient-to-b from-gray-100 to mb-40">
        {/* <h1 className="text-2xl md:text-3xl px-4 text-center font-semibold flex justify-start mt-4">Recent Projects</h1> */}
        {/* <TrendingProjects />
        
        <Service /> */}
        <TestComponent />
        
      </div>
    </div>
  );
};

export default Home;
