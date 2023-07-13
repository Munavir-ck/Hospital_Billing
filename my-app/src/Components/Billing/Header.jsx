import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import { FaLessThan } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import Slider from "react-slick";

function Header() {
  return (
    <>
     <div className="flex flex-col sm:flex-row w-full pb-5 mt-5 gap-3 ">
  <form className="w-full">
    <label
      htmlFor="default-search"
      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
    >
      Search
    </label>
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-3 h-3 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="search"
        id="default-search"
        className="block w-full p-3 pl-8 text-xs text-gray-900 border bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-full"
        placeholder="Search Mockups, Logos..."
        required
      />
    </div>
  </form>

  <div className="flex flex-col  justify-between sm:flex-row w-full h-10 gap-3">
    <button className="w-full sm:w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
      Make An Appointments
    </button>

    <button className="w-full sm:w-full bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
      Add Patient
    </button>

    <button className="h-10 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      <AiFillBell size={20} />
    </button>
  </div>
</div>

<div className="flex flex-col sm:flex-row justify-between h-14 w-full">
  <h1 className="text-4xl font-bold">Billing Overview</h1>
  <div className="flex justify-between p-1 w-48 h-10 bg-cyan-500 rounded-lg">
    <div className="bg-blue-800 w-8 h-8 p-2 rounded-lg">
      <FaLessThan size={15} color="white" />
    </div>
    <div>
      <p className="text-center font-semibold">February</p>
    </div>
    <div className="bg-blue-800 w-8 h-8 p-2 rounded-lg">
      <FaGreaterThan size={15} color="white" />
    </div>
  </div>
</div>

    </>
  );
}

export default Header;
