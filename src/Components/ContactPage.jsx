import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-black text-white py-20 " id='contact'>
      <div className="container mx-auto px-8 md:px-16 ">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
        <div className="flex flex-col md:flex-row items-center md:space-x-12 ">
          <div className="flex-1">
            <h3
              className="text-3xl text-transparent bg-clip-text 
      bg-gradient-to-r from-green-400 to-blue-500"
            >
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web Developement Projects or Partnership
              opportunities
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:baaskar12308@gmail.com"
                className="hover:underline"
              >
                Baaskar12308@gmail
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+918608883195</span>
            </div>

            <div className="mb-4 ">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>
                No.12, vimalapuram, 3rd street, manali, chennai-600068
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter you Name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Enter you Email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Message</label>
                <textarea
                  type="text"
                  rows="5"
                  placeholder="Enter you Message "
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500
              text-white hidden md:inline transform transition-transform duration-300 
              hover:scale-105 px-8 py-2 rounded-full">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
