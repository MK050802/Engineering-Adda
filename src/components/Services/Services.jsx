// import React from "react";

// const ServiceGrid = () => {
//   return (
//     <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
//       {/* Box 1 */}
//       <div className="relative">
//         <div>
//           <h1 className="font-bold text-customColor3 text-center">
//             RESOUORCES
//           </h1>
//         </div>
//         <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200 ">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 1
//           </div>
//         </button>
//       </div>
//       {/* Box 2 */}
//       <div className="relative">
//         <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 2
//           </div>
//         </button>
//       </div>
//       {/* Box 3 */}
//       <div className="relative">
//         <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 3
//           </div>
//         </button>
//       </div>
//       {/* Box 4 */}
//       <div className="relative">
//         <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 hover:-translate-y-1 hover:scale-110 transition-all duration-200">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 5
//           </div>
//         </button>
//       </div>
//       {/* Box 6 */}
//       <div className="relative">
//         <button className="w-full sm:w-[300px] h-[300px] bg-gray-200 m-5  rounded-tl-lg  bg-cover bg-center border-b-4 border-blue-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 6
//           </div>
//         </button>
//       </div>
//       <div className="relative">
//         <button className="w-full sm:w-[300px] h-[300px] bg-gray-200 m-5  rounded-tl-lg  bg-cover bg-center border-b-4 border-blue-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
//           <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
//             Box 6
//           </div>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ServiceGrid;

// import React from "react";

// const Services = () => {
//   return (
//     <div className="min-h-screen flex items-center bg-sky-600">
//       <div className="flex-1 max-w-4xl mx-auto p-10">
//         <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-orange-500">
//               <h3 flex justify-center items-center></h3>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-red-500"></div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-green-500"></div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-green-500"></div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-orange-500"></div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-red-500"></div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Services;

// import React from "react";
// import {
//   FaBriefcase,
//   FaClipboardList,
//   FaShareAlt,
//   FaBook,
//   FaComments,
//   FaBlog,
// } from "react-icons/fa";

// const Services = () => {
//   return (
//     <div className="min-h-screen flex items-center bg-sky-600">
//       <div className="flex-1 max-w-4xl mx-auto p-10">
//         <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-orange-500 flex flex-col justify-center items-center p-4">
//               <FaBriefcase size={40} className="text-orange-500" />
//               <h3 className="text-xl font-bold mt-4">Jobs</h3>
//               <p className="text-gray-600 mt-2">
//                 Find your dream job with our extensive listings.
//               </p>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-red-500 flex flex-col justify-center items-center p-4">
//               <FaClipboardList size={40} className="text-yellow-500" />
//               <h3 className="text-xl font-bold mt-4">Internship</h3>
//               <p className="text-customGray mt-2">
//                 Gain experience with top internships.
//               </p>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-green-500 flex flex-col justify-center items-center p-4">
//               <FaShareAlt size={40} className="text-green-500" />
//               <h3 className="text-xl font-bold mt-4">Share Notes</h3>
//               <p className="text-gray-600 mt-2">
//                 Exchange notes with your peers easily.
//               </p>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-green-500 flex flex-col justify-center items-center p-4">
//               <FaBook size={40} className="text-blue-800" />
//               <h3 className="text-xl font-bold mt-4">Notes & PYQ</h3>
//               <p className="text-gray-600 mt-2">
//                 Access notes and previous years' questions.
//               </p>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-orange-500 flex flex-col justify-center items-center p-4">
//               <FaComments size={40} className="text-green-500" />
//               <h3 className="text-xl font-bold mt-4">Chating</h3>
//               <p className="text-gray-600 mt-2">
//                 Connect with others through chat.
//               </p>
//             </div>
//           </li>
//           <li className="bg-white rounded-lg shadow-xl">
//             <div className="h-64 border-b-4 border-red-500 flex flex-col justify-center items-center p-4">
//               <FaBlog size={40} className="text-red-600" />
//               <h3 className="text-xl font-bold mt-4">Blog</h3>
//               <p className="text-gray-600 mt-2">
//                 Read and share blogs on various topics.
//               </p>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaBook,
  FaStickyNote,
  FaComments,
  FaBlog,
} from "react-icons/fa";
import "./Services.css";

const Services = () => {
  const services = [
    {
      icon: <FaBriefcase />,
      title: "Jobs",
      description:
        "Find the latest job opportunities tailored to your skills and interests.",
      borderColor: "border-slate-50",
    },
    {
      icon: <FaGraduationCap />,
      title: "Internships",
      description: "Explore internships to gain valuable work experience.",
      borderColor: "border-slate-50",
    },
    {
      icon: <FaBook />,
      title: "Share Notes",
      description: "Share and access notes to help you study more effectively.",
      borderColor: "border-slate-50",
    },
    {
      icon: <FaStickyNote />,
      title: "Notes & PYQ",
      description: "Find border-slate-50papers for better preparation.",
      borderColor: "border-slate-50",
    },
    {
      icon: <FaComments />,
      title: "Chatting",
      description:
        "Engage in discussions with peers and experts in your field.",
      borderColor: "border-slate-50",
    },
    {
      icon: <FaBlog />,
      title: "Blog",
      description: "Read and share blog posts on a variety of topics.",
      borderColor: "border-slate-50",
    },
  ];

  return (
    <div className="min-h-screen flex items-center bg-sky-600 ">
      <div className="flex-1 max-w-4xl mx-auto p-10">
        <ul className="grid grid-cols-1 gap-10  sm:grid-cols-2 md:grid-cols-3 md:gap-14">
          {services.map((service, index) => (
            <li
              key={index}
              className="relative bg-white rounded-lg  overflow-hidden group featureBox h-68 gap-10"
            >
              <div
                className={`h-64 ${service.borderColor} border-b-4 flex flex-col items-center p-4 transition-transform duration-300 transform group-hover:scale-105 `}
              >
                <div className="text-4xl my-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-center px-4">{service.description}</p>
                <div className="absolute inset-0 bg-white bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="text-white bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </li>
          ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default Services;
