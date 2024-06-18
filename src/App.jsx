import React from "react";
import LandingPage from "./pages/LandingPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Nav from "./components/Homepage/Nav";
import AboutUs from "./pages/aboutUs";
import JobAndIntern from "./pages/JobAndIntern";
import NotesAndPyq from "./pages/NotesAndPyq";
import ProfilePage from "./pages/ProfilePage";
import Form from "./pages/Auth/Registration";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Nav />}>
        <Route index element={<LandingPage />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="JobAndIntern" element={<JobAndIntern />} />
        <Route path="NotesAndPyq" element={<NotesAndPyq />} />
        <Route path="ProfilePage" element={<ProfilePage />} />
      </Route>
      <Route path="Form" element={<Form />} />
    </>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
