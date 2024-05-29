import Nav from "./components/Homepage/Nav";
// import Slider from "./components/Homepage/Slider";
import Carousel from "./components/carousel.component";

const App = () => {
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",

    "https://www.shutterstock.com/image-vector/learn-online-book-digital-futuristic-600nw-2182663111.jpg",
  ];

  return (
    <>
      <Nav />
      {/* <Slider /> */}
      <div className="w-[100%] m-auto pt-0">
        <Carousel slides={slides} />
      </div>
      {/* <div className=" w-full h-screen bg-customGray"></div> */}
    </>
  );
};

export default App;
