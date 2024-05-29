import React, { useState } from "react";
import Button from "./Button";
// import "../App.css";

const Nav = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "NOTES", link: "/" },
    { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between  bg-customGray bg-transparent py-7 md:px-10 px-7">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-customWhite"
        >
          <span className="text-3xl text-indigo-600 rounded-full mr-1 pt-2 ">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          ShareIT
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full bg-transparent md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={link.link}
                className="  text-customWhite  hover:text-customColor2 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <ul>
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
