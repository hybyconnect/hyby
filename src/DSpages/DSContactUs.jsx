import React from "react";

import DSFooter from "../components/DSFooter";
import DSNavbar from "../components/DSNavbar";
import { useState } from "react";


const DSNotification = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To track the success or failure message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("All fields are required.");
      return;
    }

    try {
      const response = await fetch(`https://hybyconnect.com/api/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      } else {
        setStatus("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      <DSNavbar />
      <section className="flex items-center justify-center py-16 px-8 md:px-12 bg-gradient-to-br from-gray-100 via-white to-gray-100 text-black h-[110vh] md:h-[80vh]">
      <div className="max-w-4xl w-full text-center p-8 bg-gradient-to-b from-gray-200 to-gray-100 rounded-lg shadow-xl transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-yellow-500">
          Get in Touch
        </h2>
        <p className="text-lg mb-6 text-gray-900 opacity-80 hover:opacity-100 transition-all duration-300">
          Interested in working with us? Reach out and let's discuss your project.
        </p>
        
        {/* Display status message */}
        {status && <p className="text-lg mb-4 text-red-500">{status}</p>}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-left font-semibold">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            aria-label="Name"
            required
          />

          <label htmlFor="email" className="text-left font-semibold">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            aria-label="Email"
            required
          />

          <label htmlFor="phone" className="text-left font-semibold">Phone</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            required
            aria-label="Phone"
          />

          <label htmlFor="message" className="text-left font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F7FF80] transition-all duration-300 w-full"
            rows="4"
            aria-label="Message"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-400 text-white-300 px-6 py-3 rounded-md shadow-md hover:bg-gray-800 transform transition-all duration-300 hover:scale-105 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
      <DSFooter />
    </div>
  );
};

export default DSNotification;
