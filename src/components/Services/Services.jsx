import React from "react";

const ServiceGrid = () => {
  return (
    <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 ">
      {/* Box 1 */}
      <div className="relative">
        <div>
          <h1 className="font-bold text-customColor3 text-center">
            RESOUORCES
          </h1>
        </div>
        <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200 ">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 1
          </div>
        </button>
      </div>
      {/* Box 2 */}
      <div className="relative">
        <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 2
          </div>
        </button>
      </div>
      {/* Box 3 */}
      <div className="relative">
        <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition-all duration-200">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 3
          </div>
        </button>
      </div>
      {/* Box 4 */}
      <div className="relative">
        <button className="w-full sm:w-[300px] h-[300px] rounded-tr-lg bg-gray-200 m-5 rounded-2xl  bg-cover bg-center border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 hover:-translate-y-1 hover:scale-110 transition-all duration-200">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 5
          </div>
        </button>
      </div>
      {/* Box 6 */}
      <div className="relative">
        <button className="w-full sm:w-[300px] h-[300px] bg-gray-200 m-5  rounded-tl-lg  bg-cover bg-center border-b-4 border-blue-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 6
          </div>
        </button>
      </div>
      <div className="relative">
        <button className="w-full sm:w-[300px] h-[300px] bg-gray-200 m-5  rounded-tl-lg  bg-cover bg-center border-b-4 border-blue-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
          <div className="absolute inset-0 flex justify-center items-center text-black text-xl font-bold">
            Box 6
          </div>
        </button>
      </div>
    </div>
  );
};

export default ServiceGrid;
