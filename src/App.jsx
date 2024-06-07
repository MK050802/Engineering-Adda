import Nav from "./components/Nav";
import JobAndIntern from "./pages/JobAndIntern";
import NotesAndPyq from "./pages/NotesAndPyq";
import AboutUs from "./pages/aboutUs";
import JobCard from "./components/JobCard";
const App = () => {
  return (
    <div className="">
      <Nav />
      {/* <AboutUs/> */}
      <JobAndIntern/>
      {/* <JobCard/> */}
    </div>
  );
};

export default App;
