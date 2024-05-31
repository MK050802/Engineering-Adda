import Nav from "./components/Nav";
import NotesAndPyq from "./pages/NotesAndPyq";
import NotesPage from "./components/NotesPage";
import AboutUs from "./pages/aboutUs";
const App = () => {
  return (
    <>
      <Nav />
      {/* <AboutUs/> */}
      <NotesAndPyq/>
      {/* <NotesPage/> */}
      {/* <div className=" w-full h-screen bg-indigo-200"></div> */}
    </>
  );
};

export default App;
