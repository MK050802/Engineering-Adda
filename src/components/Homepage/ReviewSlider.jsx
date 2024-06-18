// import React, { useState, useEffect } from "react";
// import { BsStarFill, BsStarHalf, BsStar, BsPersonCircle } from "react-icons/bs";

// const reviews = [
//   {
//     name: "John Doe",
//     image: null, // null means no image provided
//     review: "Great product! Highly recommend it.",
//     rating: 4.5,
//   },
//   {
//     name: "Jane Smith",
//     image: "https://via.placeholder.com/150", // Example image,
//     // Example image
//     review: "Amazing quality and fast delivery.",
//     rating: 5,
//   },
//   {
//     name: "Alex Johnson",
//     image: null,
//     review: "Good value for the price.",
//     rating: 4,
//   },
//   // Add more reviews as needed
// ];

// const ReviewSlider = () => {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
//     }, 5000); // Change slide every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStar = rating % 1 !== 0;
//     const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
//     return (
//       <>
//         {Array(fullStars)
//           .fill()
//           .map((_, i) => (
//             <BsStarFill key={"full" + i} />
//           ))}
//         {halfStar && <BsStarHalf />}
//         {Array(emptyStars)
//           .fill()
//           .map((_, i) => (
//             <BsStar key={"empty" + i} />
//           ))}
//       </>
//     );
//   };

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-4 bg-black text-white rounded-lg shadow-lg overflow-hidden relative">
//       <div
//         className="flex transition-transform duration-500 ease-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {reviews.map((review, index) => (
//           <div key={index} className="flex-none w-full p-4">
//             <div className="flex flex-col items-center">
//               {review.image ? (
//                 <img
//                   src={review.image}
//                   alt={review.name}
//                   className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-orange-500"
//                 />
//               ) : (
//                 <BsPersonCircle className="w-24 h-24 text-gray-400 mb-4" />
//               )}
//               <h3 className="text-xl font-bold mb-2">{review.name}</h3>
//               <p className="text-center mb-4">{review.review}</p>
//               <div className="flex text-orange-500">
//                 {renderStars(review.rating)}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
//         {reviews.map((_, i) => (
//           <div
//             onClick={() => setCurrent(i)}
//             key={"circle" + i}
//             className={`rounded-full w-5 h-5 cursor-pointer ${
//               i === current ? "bg-orange-500" : "bg-gray-500"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ReviewSlider;
