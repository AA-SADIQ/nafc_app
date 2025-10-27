import React, { useState } from "react";

export default function SignInPage() {
  const [armyNumber, setArmyNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
    console.log({ armyNumber, idNumber });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-900">
      {/* Left Section - Image */}
      <div className="hidden lg:flex w-1/2 bg-black relative">
        <img
          src="/soldier.jpg" // <-- Replace with your actual image path
          alt="Army Officer"
          className="object-cover w-full h-full opacity-90"
        />
        {/* Progress dots at bottom */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${
                i === 0 ? "bg-gray-300" : "bg-gray-600"
              }`}
            ></span>
          ))}
        </div>
      </div>

      {/* Right Section - Sign In */}
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 px-8 md:px-16">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/army-logo.png" // <-- Replace with your logo path
              alt="Army Logo"
              className="w-16 h-16"
            />
          </div>

          {/* Back Arrow */}
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 mb-4 hover:text-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back
          </button>

          <h2 className="text-2xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-500 mb-6 text-sm">
            Sign in with your Army number and Tier number to gain access
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="armyNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Army number
              </label>
              <input
                id="armyNumber"
                type="text"
                value={armyNumber}
                onChange={(e) => setArmyNumber(e.target.value)}
                placeholder="Enter Army number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="idNumber"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                I.D number
              </label>
              <input
                id="idNumber"
                type="password"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                placeholder="Enter I.D / Tier number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-gray-800 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-2 rounded-md font-medium hover:bg-gray-800 transition"
            >
              Sign in
            </button>
            <div className="text-sm text-center mt-4">
            <p className="text-gray-600">
              Don’t have an account?{" "}
              <a
               href="/Signup link"
                className="text-gray-900 font-semibold hover:underline"
             >
                Sign up
    </a>
  </p>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}
