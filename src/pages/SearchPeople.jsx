import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import arya from "./images/arya.jpg";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const people = [
    {
      id: 1,
      name: "Sweety Devi",
      college: "Mad House University",
      branch: "Power BI || Data Structre and algo || Web Developer  || ECE",
      place: "Khachi,Bihar 2.0",
    },
    {
      id: 2,
      name: "Guddu Pandit",
      college: "Tribal Government School",
      branch: "flutter developer || Data Analyst || Web Developer || CS",
      place: "Vashepur, Jharkhad",
    },
    {
      id: 3,
      name: "Vinod Khanna",
      college: "NIT Kurukshetra, Haryana",
      branch: "Artificial Intelligence || Matchine Learning || DSA || PI",
      place: "Mumbai, Maharastra",
    },
    {
      id: 4,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    {
      id: 5,
      name: "Bauwa ",
      college: "Purv madhyamik vidhyalay , Chaklala",
      branch: "Mathematics",
      place: "Varanasi,Uttar Pradesh",
    },
    {
      id: 6,
      name: "Ashish Kumar Yadav",
      college: "Allahabad University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    {
      id: 7,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Astro Physics",
      place: "Banaras",
    },
    {
      id: 8,
      name: "Shantanu Singh",
      college: "Patna University",
      branch: "Sprituality",
      place: "Rohtash ,Bihar",
    },
    {
      id: 9,
      name: "Aryawarti",
      college: "Banaras Hindu University",
      branch: "Phylosophy",
      place: "Kashi",
    },
    // Add more people as needed
  ];

  const filteredPeople = people.filter((person) => {
    const queryLowerCase = query.toLowerCase();
    return (
      person.name.toLowerCase().includes(queryLowerCase) ||
      person.college.toLowerCase().includes(queryLowerCase) ||
      person.branch.toLowerCase().includes(queryLowerCase) ||
      person.place.toLowerCase().includes(queryLowerCase)
    );
  });

  return (
    <div className="min-h-screen flex items-center justify-center mt-24 bg-sky-600">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Search People</h1>
        <div className="relative mb-4">
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Search by name, college, branch, or place..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-4 top-4 right-2 text-gray-400"
          />
        </div>
        <ul>
          {filteredPeople.map((person) => (
            <li key={person.id} className="flex p-2 border-b border-gray-200">
              <div>
                <img
                  className="w-14 h-14 rounded-full object-cover cursor-pointer"
                  src={arya}
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col ml-6 gap-1">
                <div className="font-bold cursor-pointer">{person.name}</div>
                <div className="text-sm text-gray-600 font-semibold">
                  {person.branch}
                </div>
                <div className="text-sm text-gray-600">{person.college}</div>
                <div className="text-sm text-gray-500">{person.place}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
