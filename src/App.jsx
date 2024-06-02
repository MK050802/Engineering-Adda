// import "./App.css";
// import Nav from "./components/Homepage/Nav";

// // import Slider from "./components/Homepage/Slider";
// // import Carousel from "./components/Homepage/carousel.component";
// import ImageSlider from "./components/Homepage/ImageSlider";
import ReviewSlider from "./components/Homepage/ReviewSlider";

// const App = () => {
//   // let slides = [
//   //   "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
//   //   "https://wallpapercave.com/wp/wp3386769.jpg",
//   //   "https://wallpaperaccess.com/full/809523.jpg",
//   //   "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
//   // ];

//   return (
//     <>
//       {/* <Slider /> */}

//       <div className=" w-full h-screen bg-customGray">
//         <Nav />
//         {/* <Slider handleOrderPopup={handleOrderPopup} /> */}
//         {/* <div className="w-[70%] m-auto pt-18">
//           <Carousel slides={slides} />
//         </div> */}
//         {/* <div className="container  mx-auto mt-20"> */}

//         {/* <Carousel slides={slides} /> */}
//         {/* </div> */}
//         <ImageSlider />
//         {/* <ReviewSlider /> */}
//       </div>
//     </>
//   );
// };

// export default App;

import React from "react";
import Nav from "./components/Homepage/Nav";
import Hero from "./components/Hero/Hero";
const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <ReviewSlider />
    </div>
  );
};
export default App;
