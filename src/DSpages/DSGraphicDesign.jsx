import React from "react";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";
import { Link } from "react-router-dom";
import assets from "../assets/assets";
import TrendingProjects from "../components/TrendingProjects";

const DSGraphicDesign = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <DSNavbar />
      <div className="h-[150px] p-2 flex justify-between bg-gray-100 shadow-md rounded  bg-yellow-400">
          <h2 className="text-white p-2"><span className="text-white p-2 text-bold text-3xl md:text-5xl">Graphic Designing</span> <br /> <span className=" text-black text-bold p-4">We Provide <br />  </span> <span className="text-white p-4 text-bold text-md md:text-xl">Best Graphics</span></h2>
          <img src={assets.twogear} alt="" 
          className=" w-20  h-15 lg:w-156 lg:h-134"/>
         </div>

        
      <section className="py-4 px-6 md:px-12 bg-gradient-to-br from-gray-100 via-gray to-gray-100 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2>Top Graphic Designs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              {
                title: "Graphic Designing",
                description:
                  "Creating visually appealing designs for various purposes, such as logos, brochures, and social media posts.",
                image: `${assets.graphic}`, // Path to the image
                route: "/services/graphics",
              },
              
            ].map((service, index) => (
              <div
                key={index}
                className="p-2 bg-gradient-to-b from-white to-white rounded-lg shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-white w-full h-[150px] flex items-center justify-center rounded-full mx-auto mb-6">
                  <img
                    src={service.image} // Use the image property
                    alt={service.title}
                    className="w-full h-full object-cover" // Adjust size and styling as needed
                  />
                </div>
                <h3 className="text-2xl font-semibold  text-black">
                  {service.title}
                </h3>
                <p className="text-gray-800">{service.description}</p>
                <Link
                  to="/DSContact" // Use the route property
                  className="inline-block w-full mt-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded hover:bg-yellow-600 transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Let's Start Button Section
        <div className="text-center mt-16">
          <h3 className="text-3xl font-semibold text-transparent bg-clip-text bg-red-500 mb-6">
            Ready to take the next step?
          </h3>
          <p className="text-gray-900 mb-8 text-2xl">
            Get started with our services today and watch your business grow!
          </p>
          <Link to={"/DSContact"}>
            <button className="bg-yellow-500 my-4 text-white font-bold text-lg py-3 px-8 rounded-full hover:from-[#f7ff80] hover:to-[#f7ff80] transition-all duration-300 transform hover:scale-105">
              Let's Start
            </button>
          </Link>
        </div> */}
      </section>
      <div className="py-10 bg-gray-100"></div>
      <DSFooter />
    </div>
  );
};

export default DSGraphicDesign;