import React, { useState } from "react";
import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";

const DSProjectsPage = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      title: "App Development",
      status: "Work Started",
      details: "Ready Within 16 Hours",
      paymentReceived: true,
      image: `${assets.project1}`,
      feedback: false,
    },
    {
      id: 2,
      title: "Video Editing",
      status: "Pending",
      details: "Pay To Start Your Work",
      paymentReceived: false,
      image: `${assets.project1}`,
      feedback: false,
    },
    {
      id: 3,
      title: "MAW CARE Website",
      status: "Completed",
      details: "You Have Left 2 Revision For Your Website",
      feedback: false,
      image: `${assets.project1}`,
    },
    {
      id: 4,
      title: "Animal Care App",
      status: "Completed",
      details: "Template Delivered",
      feedback: true,
      image: `${assets.project1}`,
    },
    {
      id: 5,
      title: "E-commerce Platform",
      status: "Work Started",
      details: "Development in Progress",
      paymentReceived: true,
      image: `${assets.project1}`,
      feedback: false,
    },
    {
      id: 6,
      title: "Logo Design",
      status: "Pending",
      details: "Awaiting Client Approval",
      paymentReceived: false,
      image: `${assets.project1}`,
      feedback: false,
    },
    {
      id: 7,
      title: "Mobile App UI/UX",
      status: "Completed",
      details: "Final Design Delivered",
      feedback: true,
      image: `${assets.project1}`,
    },
    {
      id: 8,
      title: "Web Application",
      status: "Completed",
      details: "Deployed to Production",
      feedback: false,
      image: `${assets.project1}`,
    },
  ]);

  const handlePayment = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, paymentReceived: true } : order
      )
    );
  };

  const handleCancel = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order
      )
    );
  };

  const handleFeedback = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, feedback: true } : order
      )
    );
  };

  const ongoingOrders = orders.filter(
    (order) => order.status === "Work Started" || order.status === "Pending"
  );
  const completedOrders = orders.filter(
    (order) => order.status === "Completed" || order.status === "Cancelled"
  );

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <DSNavbar />
        <div className="bg-yellow-400 h-[7rem] p-4 rounded-t-lg">
          <h2 className="text-2xl m-2 font-semibold"> <span className="text-xl">You Have</span> <br /> {orders.length} Orders Total</h2>
          <img src="" alt="" />
        </div>

        {/* Ongoing Projects */}
        <div className="mt-4 bg-gray-100">
          <h3 className="text-xl px-4 md:text-2xl font-semibold">Ongoing ({ongoingOrders.length})</h3>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {ongoingOrders.map((order) => (
              <div key={order.id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col transform transition-transform hover:scale-105">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-full h-40 object-cover mb-4 rounded-xl"
                />
                <div>
                  <h4 className="font-semibold text-md md:text-lg">{order.title}</h4>
                  <p className="text-gray-600 text-base mt-2">{order.details}</p>
                  <div className="mt-4 flex items-center">
                    {order.status === "Pending" && !order.paymentReceived && (
                      <>
                        <button
                          onClick={() => handleCancel(order.id)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handlePayment(order.id)}
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Pay
                        </button>
                      </>
                    )}
                    {order.status === "Work Started" && order.paymentReceived && (
                      <p className="text-green-500">Payment Received ✓</p>
                    )}
                  </div>
                  {order.feedback && (
                    <p className="text-green-500 mt-4">Feedback Given</p>
                  )}
                  {!order.feedback && order.status === "Work Started" && (
                    <button
                      onClick={() => handleFeedback(order.id)}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                    >
                      Give Feedback
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Projects */}
        <div className="mt-8 bg-gray-100 py-4">
          <h3 className="text-xl px-4 md:text-2xl font-semibold">Completed ({completedOrders.length})</h3>
          <div className="grid grid-rows-auto gap-4 md:mx-6 mt-4">
            {completedOrders.map((order) => (
              <div key={order.id} className="bg-white shadow rounded-2xl  p-4 flex flex-col">
                <img
                  src={order.image}
                  alt={order.title}
                  className="w-full h-[250px] object-cover mb-2 rounded-md"
                />
                <div>
                  <h4 className="font-semibold text-md md:text-xl">{order.title}</h4>
                  <p className="text-gray-600 text-sm mt-2">{order.details}</p>
                  {order.feedback && (
                    <p className="text-green-500 mt-2">Feedback Given</p>
                  )}
                  {!order.feedback && order.status === "Completed" && (
                    <button
                      onClick={() => handleFeedback(order.id)}
                      className="bg-green-500 hover:bg-green-700 text-md md:text-lg text-white font-bold py-2 px-4 rounded mt-4"
                    >
                      Give Feedback
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      <div className="py-10 bg-gray-100"></div>
      </div>
      <DSFooter />
    </>
  );
};

export default DSProjectsPage;
