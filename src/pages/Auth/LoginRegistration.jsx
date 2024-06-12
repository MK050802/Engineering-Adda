import React, { useState } from "react";
import "./RegisterStyle.css";

const Register = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const togglePanel = () => {
    setIsRightPanelActive(!isRightPanelActive);
  };

  return (
    <div
      className={`container ${
        isRightPanelActive ? "right-panel-active" : ""
      } min-h-screen flex items-center justify-center bg-gray-100 p-6 animate-fadeIn`}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="form-container sign-up-container">
          <form className="space-y-6">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Create Account
            </h1>
            <div className="social-container flex justify-center">
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="block text-gray-600 text-sm mb-4">
              or use your email for registration
            </span>
            <div>
              <label className="block mb-1 text-gray-600">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Phone Number</label>
              <input
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Address</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form className="space-y-6">
            <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
            <div className="social-container flex justify-center">
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a
                href="#"
                className="social bg-white border border-gray-300 rounded-full w-10 h-10 flex items-center justify-center text-gray-700 mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span className="block text-gray-600 text-sm mb-4">
              or use your account
            </span>
            <div>
              <label className="block mb-1 text-gray-600">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-600">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sign In
            </button>
          </form>
        </div>

        <div className="overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform transform">
          <div className="overlay bg-gradient-to-r from-pink-500 to-red-500 text-white absolute left-[-100%] h-full w-[200%] transform transition-transform">
            <div className="overlay-panel overlay-left flex items-center justify-center flex-col p-10 text-center absolute top-0 h-full w-1/2 transform translate-x-[-20%]">
              <h1 className="text-3xl font-bold">Welcome Back!</h1>
              <p className="mt-4 mb-8">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-pink-500 transition duration-300"
                onClick={togglePanel}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right flex items-center justify-center flex-col p-10 text-center absolute top-0 h-full w-1/2 right-0 transform translate-x-0">
              <h1 className="text-3xl font-bold">Hello, Friend!</h1>
              <p className="mt-4 mb-8">
                Enter your personal details and start journey with us
              </p>
              <button
                className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-white hover:text-pink-500 transition duration-300"
                onClick={togglePanel}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
