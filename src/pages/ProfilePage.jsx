import React from "react";
import arya from "./images/arya.jpg"

const ProfilePage = () => {
  return (
    <div className=" mx-auto rounded shadow-xl w-full overflow-hidden   pt-16 bg-sky-600">
      <div className="h-[140px] bg-gradient-to-r from-orange-600 to-orange-400 "></div>
      <div className="px-12 py-2 flex flex-col gap-3 pb-6 pl-20 bg-white">
        <div className="h-[180px] shadow-md w-[180px] rounded-full border-4 overflow-hidden -mt-14 border-white">
          <img
            src={arya}
            className="w-full h-full rounded-full object-center object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl text-slate-900 relative font-bold leading-6">
            Ashish Aryawarti
          </h3>
          <p className="text-lg text-gray-600 mt-2 mb-2">NIT Kurukshetra,Haryana</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <span className="rounded-lg bg-yellow-100 px-4 py-2 text-xs font-medium text-yellow-800">
           ECE
          </span>
          <span className="rounded-lg bg-green-100 px-4 py-2 text-xs font-medium text-green-800">
            2021-2025
          </span>
          <span className="rounded-lg bg-blue-100 px-4 py-2 text-xs font-medium text-blue-800">
            Web Developer
          </span>
          <span className="rounded-lg bg-indigo-100 px-4 py-2 text-xs font-medium text-indigo-800">
           Flutter Developer
          </span>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-orange-500 px-3 py-2 text-sm font-medium text-white transition hover:border-gray-300 active:bg-white hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 mt-4"
          >
            Send Message
          </button>
        </div>
        <h4 className="text-xl font-medium leading-3 mt-8">About Me</h4>
        <p className="text-sm text-stone-500">
          Hi ! Yaha kyu aaya hai bhai tu kuchh nhi hai mere pe lala pada hai job
           <br />
          ka, tere ko hai tabhi msg krna, Hi ! Yaha kyu aaya hai bhai tu kuchh
          <br />
          nhi hai mere pe ,job ho to bata, tere ko hai tabhi msg krna
        </p>
        <h4 className="text-md font-medium leading-3">Experiences</h4>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-slate-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
            </svg>
            <div className="leading-3">
              <p className="text-sm font-bold text-slate-700">Ui Designer</p>
              <span className="text-xs text-slate-600">5 years</span>
            </div>
            <p className="text-sm text-slate-500 self-start ml-auto">
              As Ui Designer on Front Page
            </p>
          </div>
          <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-slate-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
            </svg>
            <div className="leading-3">
              <p className="text-sm font-bold text-slate-700">Ui Designer</p>
              <span className="text-xs text-slate-600">5 years</span>
            </div>
            <p className="text-sm text-slate-500 self-start ml-auto">
              As Ui Designer on Front Page
            </p>
          </div>
          <div className="flex items-center gap-3 px-2 py-3 bg-white rounded border w-full">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-8 w-8 text-slate-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
            </svg>
            <div className="leading-3">
              <p className="text-sm font-bold text-slate-700">Ui Designer</p>
              <span className="text-xs text-slate-600">5 years</span>
            </div>
            <p className="text-sm text-slate-500 self-start ml-auto">
              As Ui Designer on Front Page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
