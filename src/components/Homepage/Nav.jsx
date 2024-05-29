import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
// import "../App.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({
    services: false,
    notes: false,
    jobsInternship: false,
    chat: false,
  });
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen({
          services: false,
          notes: false,
          jobsInternship: false,
          chat: false,
        });
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (section) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const closeDropdown = () => {
    setDropdownOpen({
      services: false,
      notes: false,
      jobsInternship: false,
      chat: false,
    });
  };

  const Links = [
    { name: "HOME", link: "/" },
    {
      name: "SERVICES",
      link: "/services",
      submenu: ["Service 1", "Service 2", "Service 3"],
    },
    { name: "ABOUT", link: "/about" },
    {
      name: "NOTES",
      link: "/notes",
      submenu: ["Note 1", "Note 2", "Note 3"],
    },
    {
      name: "JOBS/INTERNSHIP",
      link: "/jobs-internship",
      submenu: ["Job 1", "Job 2", "Job 3"],
    },
    { name: "CHAT", link: "/chat" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-10">
      <div className="md:flex items-center justify-between bg-transparent bg-customGray py-4 md:px-10 px-4">
        <div className="font-bold text-lg cursor-pointer flex items-center font-[Poppins] text-customWhite">
          <span className="text-2xl text-indigo-600 rounded-full mr-1 pt-1">
            <ion-icon name="logo-ionic"></ion-icon>
          </span>
          ShareIT
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-4 absolute md:static bg-customGray md:z-auto z-[-1] left-0 w-full bg-transparent md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in ${
            open ? "top-16 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-4 text-base md:my-0 my-4 relative group"
            >
              <a
                href={link.link}
                className="text-customWhite hover:text-customColor2 duration-500"
                onClick={(e) => {
                  if (link.submenu) {
                    e.preventDefault();
                    toggleDropdown(link.name.toLowerCase());
                  } else {
                    closeDropdown();
                  }
                }}
              >
                {link.name}
                {link.submenu && (
                  <ion-icon
                    name={
                      dropdownOpen[link.name.toLowerCase()]
                        ? "chevron-up"
                        : "chevron-down"
                    }
                    className="ml-1 inline"
                  ></ion-icon>
                )}
              </a>
              {link.submenu && dropdownOpen[link.name.toLowerCase()] && (
                <ul
                  ref={dropdownRef}
                  className="absolute left-0 mt-1 w-40 bg-black rounded-md shadow-lg border border-gray-500"
                >
                  {link.submenu.map((sublink, subindex) => (
                    <li
                      key={subindex}
                      className="border-b border-gray-200 last:border-0"
                    >
                      <a
                        href={link.link} // Adjust this to sublink's link
                        className="block px-3 py-2 text-sm text-gray-200 hover:bg-orange-400 duration-300"
                        onClick={() => closeDropdown()}
                      >
                        {sublink}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <ul className="text-lg">
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};
export default Nav;
