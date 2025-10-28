import React, { useState } from "react";
import nafcImage from "../assets/images/nafc-image.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg flex max-w-5xl w-full overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2 relative">
          <img
            src={nafcImage}
            alt="NAFC"
            className="h-full w-96 object-cover"
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === 2 ? "bg-white" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">Sign up</h2>
            <div className="text-sm text-gray-600">
                 Already have an account?{" "}
            <Link 
            to="/" 
             className="text-blue-600 hover:underline"
             >
              Login
            </Link>
            </div>

          </div>

          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Signup to access
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Use the form below.
          </p>

          <form className="space-y-4">
            {/* Name Fields */}
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-600 text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-600 text-sm mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your middle name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-600 text-sm mb-1">
                Last Name
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-gray-600 text-sm mb-1">
                  Army Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Army number"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 mt-4"
            >
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
