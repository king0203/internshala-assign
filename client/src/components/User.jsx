import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiPlus, BiSolidStar } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";

const User = (props) => {
  return (
    <div className="border border-[#C0C0C0] rounded-xl w-full overflow-hidden">
      <div className="relative">
        <img
          className="w-full object-cover h-36"
          src={require("../img/coverImage.jpg")}
          alt="Cover"
        />
        <img
          className="absolute -bottom-[50%] rounded-full left-6 h-28"
          src={require("../img/logo.png")}
          alt="Logo"
        />
        <div className="absolute right-10 -bottom-16 flex space-x-5">
          <div className="font-semibold border-2 border-gray-600 px-3 rounded-lg flex items-center cursor-pointer">
            <BsThreeDots className="text-xl text-gray-600" />
          </div>
          <div className="text-orange-500 text-sm font-bold border-2 border-orange-500 px-8 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-orange-500">
            <p>Hire me</p>
          </div>
          <div className="bg-orange-500 text-white text-sm font-bold px-8 py-3 rounded-lg flex items-center cursor-pointer hover:bg-orange-700">
            <BiPlus />
            <p>Follow</p>
          </div>
        </div>
      </div>
      <div className="pt-20 px-5 pb-5">
        <p className="text-xl font-bold">{props.name}</p>
        <p className="text-lg font-semibold">Property Dealer</p>
        <div className="flex space-x-6 text-lg text-gray-600 font-semibold">
          <p>1K+ Followers</p>
          <p>1.6K+ Contacts</p>
        </div>
        <div className="text-gray-600 flex space-x-5">
          <div className="flex items-center">
            {Array(5)
              .fill("")
              .map((e, index) => (
                <BiSolidStar key={index} className="text-green-500" />
              ))}
            <p className="ml-2">5.0</p>
          </div>
          <p>725 Reviews</p>
        </div>
        <p className="text-gray-600 italic text-lg">
          "Experience and expertise you can trust in the ever-changing world of
          real estate."
        </p>

        <div className="bg-gray-400 h-px w-full my-4" />

        <div>
          <p className="text-xl font-semibold mb-2">About me</p>
          <p className="text-lg font-semibold">
            Team Leader (23 years experience)
          </p>
          <p>
            The XYZ Team is made up of the most ACTIVE local agents with the
            largest inventory of EXCLUSIVE LISTINGS and a proven track record of
            SATISFIED CLIENTS.
          </p>
          <p className="mt-2">
            We look forward to assisting you with your next move.
          </p>
        </div>

        <div className="bg-gray-400 h-px w-full my-4" />

        <div>
          <p className="text-xl font-semibold mb-2">You can find me around</p>
          <div className="flex space-x-28">
            <div>
              <p className="text-lg font-semibold mb-2">Residence</p>
              <div className="flex space-x-2 items-center">
                <HiLocationMarker className="text-purple-600" />
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
            <div>
              <p className="text-lg font-semibold mb-2">Native</p>
              <div className="flex space-x-2 items-center">
                <HiLocationMarker className="text-purple-600" />
                <p>Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
