
import React from "react";
import Nav from "./components/Homepage/Nav";
import Hero from "./components/Hero/Hero";
import Reviews from "./components/ReviewsSection/Reviews";
import Services from "./components/Services/Services";
import UserStats from "./pages/UserStats";
import Footer from "./pages/Footer/Footer";
import JobCard from "./components/JobCard";
import JobAndIntern from "./pages/JobAndIntern";

const App = () => {
  return (
    <div>
      <Nav />
      <JobAndIntern/>
      {/* <JobCard /> */}
    </div>
  );
};
export default App;
