import React from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { MdLocationSearching } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between py-2 px-10 shadow-lg items-center select-none">
      <p className="text-2xl">ESTTE</p>
      <div className="flex gap-2 items-center ml-5">
        <div className="flex items-center bg-gray-100 border-2 border-gray-400 text-gray-800 py-1 rounded-lg">
          <HiLocationMarker className="ml-5" />
          <div className="h-5 w-0.5 mx-5 bg-gray-300" />
          <input
            placeholder="Search for your Location"
            className="bg-gray-100 outline-none w-72 placeholder-gray-400"
          />
          <div className="bg-gray-100 mr-4">
            <MdLocationSearching />
          </div>
        </div>

        <div className="bg-orange-600 active:bg-orange-800 py-2 px-3 rounded-lg">
          <FaSearch className="text-xl text-white cursor-pointer" />
        </div>
        <Link
          to="#"
          className="flex items-center px-2 py-2 text-sm text-gray-800  font-semibold border border-gray-300 rounded-lg"
        >
          <FaPlus className="pr-2 w-fit text-xl" />
          <p>POST NEW</p>
        </Link>
        <Link
          to="#"
          className="bg-gray-800 text-white text-sm font-semibold px-6 py-2 rounded-lg "
        >
          <p>JOIN</p>
        </Link>
        <Link
          to="#"
          className="bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg "
        >
          <p>SIGN UP</p>
        </Link>
        <div>
          <img
            className="h-4 cursor-pointer hover:scale-105"
            src={require("../img/minmax.png")}
            alt="minmiax"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
