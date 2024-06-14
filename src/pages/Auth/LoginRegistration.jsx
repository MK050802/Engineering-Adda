// import React from "react";
// import "./RegisterStyle.css"; // Custom CSS for background image
// import { FaUserAlt, FaLock } from "react-icons/fa";

// function LoginForm() {
//   return (
//     <div className="mainBg flex justify-center items-center min-h-screen">
//       <div className="w-96 bg-transparent border border-gray-500 backdrop-blur-md text-white rounded-lg p-8">
//         <form action="">
//           <h1 className="text-3xl text-center mb-8">Login</h1>
//           <div className="relative w-full h-12 mb-6">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="w-full h-full bg-transparent border border-white/20 rounded-full text-base px-5 py-2.5 text-white placeholder-white focus:outline-none"
//             />
//             <FaUserAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base" />
//           </div>
//           <div className="relative w-full h-12 mb-6">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full h-full bg-transparent border border-white/20 rounded-full text-base px-5 py-2.5 text-white placeholder-white focus:outline-none"
//             />
//             <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base" />
//           </div>
//           <div className="flex justify-between text-sm mb-4">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="hover:underline">
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full h-11 bg-white text-gray-800 rounded-full font-bold text-base shadow-md hover:bg-gray-200"
//           >
//             Login
//           </button>
//           <div className="text-sm text-center mt-6">
//             <p>
//               Don't have an account?{" "}
//               <a href="#" className="font-semibold hover:underline">
//                 Register
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;

// import React from "react";
// import "./RegisterStyle.css"; // Custom CSS for background image
// import { FaUserAlt, FaLock } from "react-icons/fa";

// function LoginForm() {
//   return (
//     <div className="mainBg flex justify-center items-center min-h-screen">
//       <div className="w-96 bg-transparent border border-gray-500 backdrop-blur-md text-white rounded-lg p-8">
//         <form action="">
//           <h1 className="text-3xl text-center mb-8">Login</h1>
//           <div className="relative w-full h-12 mb-6">
//             <input
//               type="text"
//               placeholder="Username"
//               required
//               className="w-full h-full bg-transparent border border-gray-500 rounded-full text-base px-5 py-2.5 text-white placeholder-white focus:outline-none"
//             />
//             <FaUserAlt className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base" />
//           </div>
//           <div className="relative w-full h-12 mb-6">
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               className="w-full h-full bg-transparent border border-gray-500 rounded-full text-base px-5 py-2.5 text-white placeholder-white focus:outline-none"
//             />
//             <FaLock className="absolute right-4 top-1/2 transform -translate-y-1/2 text-base" />
//           </div>
//           <div className="flex justify-between text-sm mb-4">
//             <label className="flex items-center">
//               <input type="checkbox" className="mr-2" />
//               Remember me
//             </label>
//             <a href="#" className="hover:underline">
//               Forgot password?
//             </a>
//           </div>
//           <button
//             type="submit"
//             className="w-full h-11 bg-white text-gray-800 rounded-full font-bold text-base shadow-md hover:bg-gray-200"
//           >
//             Login
//           </button>
//           <div className="text-sm text-center mt-6">
//             <p>
//               Don't have an account?{" "}
//               <a href="#" className="font-semibold hover:underline">
//                 Register
//               </a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default LoginForm;
// import React from "react";
// import "./RegisterStyle.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebookF,
//   faTwitter,
//   faGoogle,
//   faLinkedinIn,
// } from "@fortawesome/free-brands-svg-icons";
// import "./RegisterStyle.css";
// function LoginRegistration() {
//   return (
//     <div className="container">
//       <div className="forms-container">
//         <div className="signin-signup">
//           <form action="#" className="sign-in-form">
//             <h2 className="title">Sign in</h2>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faUser} />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faLock} />
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" value="Login" className="btn solid" />
//             <p className="social-text">Or Sign in with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faGoogle} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//           </form>
//           <form action="#" className="sign-up-form">
//             <h2 className="title">Sign up</h2>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faUser} />
//               <input type="text" placeholder="Username" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faEnvelope} />
//               <input type="email" placeholder="Email" />
//             </div>
//             <div className="input-field">
//               <FontAwesomeIcon icon={faLock} />
//               <input type="password" placeholder="Password" />
//             </div>
//             <input type="submit" className="btn" value="Sign up" />
//             <p className="social-text">Or Sign up with social platforms</p>
//             <div className="social-media">
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faFacebookF} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faTwitter} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faGoogle} />
//               </a>
//               <a href="#" className="social-icon">
//                 <FontAwesomeIcon icon={faLinkedinIn} />
//               </a>
//             </div>
//           </form>
//         </div>
//       </div>

//       <div className="panels-container">
//         <div className="panel left-panel">
//           <div className="content">
//             <h3>New here ?</h3>
//             <p>
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
//               ex ratione. Aliquid!
//             </p>
//             <button className="btn transparent" id="sign-up-btn">
//               Sign up
//             </button>
//           </div>
//           <img src="img/log.svg" className="image" alt="" />
//         </div>
//         <div className="panel right-panel">
//           <div className="content">
//             <h3>One of us ?</h3>
//             <p>
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
//               laboriosam ad deleniti.
//             </p>
//             <button className="btn transparent" id="sign-in-btn">
//               Sign in
//             </button>
//           </div>
//           <img src="img/register.svg" className="image" alt="" />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginRegistration;

// import React, { useState } from "react";

// const LoginRegistration = () => {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           {isLogin ? "Login" : "Sign Up"}
//         </h2>

//         <form>
//           {!isLogin && (
//             <div className="mb-4">
//               <label className="block text-gray-700">Username</label>
//               <input
//                 type="text"
//                 className="w-full px-3 py-2 border rounded"
//                 placeholder="Enter your username"
//               />
//             </div>
//           )}
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Enter your email"
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Enter your password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             {isLogin ? "Login" : "Sign Up"}
//           </button>
//         </form>

//         <p className="mt-6 text-center">
//           {isLogin ? "Don't have an account?" : "Already have an account?"}
//           <button
//             onClick={() => setIsLogin(!isLogin)}
//             className="text-blue-500 hover:underline ml-2"
//           >
//             {isLogin ? "Sign Up" : "Login"}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default LoginRegistration;

import React, { useEffect } from "react";

const LoginRegistration = () => {
  useEffect(() => {
    // Create a script element
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;

    // Append the script to the body
    document.body.appendChild(script);

    // Cleanup function to remove the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login / Sign Up</h2>
        {/* Visme form embed */}
        <div
          className="visme_d"
          data-title="Untitled Project"
          data-url="8r1v7o8p-untitled-project?fullPage=true"
          data-domain="forms"
          data-full-page="true"
          data-min-height="100vh"
          data-form-id="75718"
        ></div>
      </div>
    </div>
  );
};

export default LoginRegistration;
