import React from "react";
import manImg from "../img/man.png";
import listingImg from "../img/list.png";
import relocationImg from "../img/relocation.png";
import appraisalImg from "../img/appraisal.png";
import { BsArrowUpRight } from "react-icons/bs";
import ServiceIcon from "./ServiceIcon";
import { HiLocationMarker } from "react-icons/hi";

const Service = () => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg mt-4">
      <p className="text-xl font-semibold">Services</p>
      <div className="flex flex-wrap justify-start mt-4">
        <ServiceIcon img={manImg} title="Buyer's agent" />
        <ServiceIcon img={listingImg} title="Listing agent" />
        <ServiceIcon img={relocationImg} title="Relocation" />
        <ServiceIcon img={appraisalImg} title="Appraisal" />
      </div>
      <div>
        <p className="text-xl font-semibold mb-3">Location</p>
        <div className="flex gap-2 items-center">
          <HiLocationMarker className="text-indigo-900" />
          <p>Mumbai, Maharashtra, India</p>
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold my-3">Email</p>
        <div className="flex gap-2 items-center">
          <img
            src={require("../img/email.png")}
            className="h-3"
            alt="Email Icon"
          />
          <p>ownerprop@gmail.com</p>
          <BsArrowUpRight className="text-sm" />
        </div>
      </div>
      <div>
        <p className="text-xl font-semibold my-3">Website</p>
        <div className="flex gap-2 items-center">
          <img
            src={require("../img/website.png")}
            className="h-3"
            alt="Website Icon"
          />
          <p>www.myproperty.com</p>
          <BsArrowUpRight className="text-sm" />
        </div>
      </div>
      <div className="text-[#E36957] my-4 mt-[1.7rem] text-center text-sm font-bold border-2 border-[#E36957] px-7 py-2 rounded-lg cursor-pointer hover:text-white hover:bg-[#E36957]">
        <p>Add to contacts</p>
      </div>
      <div className="bg-[#E36957] mb-1 justify-center text-white text-sm font-semibold px-7 py-2 rounded-lg flex items-center cursor-pointer hover:bg-orange-700">
        <p>Message</p>
      </div>
    </div>
  );
};

export default Service;
