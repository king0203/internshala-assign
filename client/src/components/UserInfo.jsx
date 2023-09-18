import React from "react";
import { HiLocationMarker } from "react-icons/hi";

const ServicingAreas = [
  "Noida Sector 57",
  "Noida Sector 100",
  "Golf Course",
  "Noida Electronic City",
  "Botanical Garden",
  "Noida Extension",
  "Noida Sector 74",
  "Indraprastha",
  "New Ashok Nagar",
  "Vrindavan Colony",
];

const UserInfo = (props) => {
  return (
    <div className="border border-[#C0C0C0] pt-5 px-5 rounded-xl w-full overflow-hidden mt-5">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold mb-3">Services</p>
        <div className="flex items-center text-sm font-semibold space-x-10">
          <p>Operating since: 2009</p>
          <p className="text-[#5CA500]">On Estte since: 2023</p>
        </div>
      </div>
      <p>
        I specialise in the Commercial property management, the Luxury property
        management, the Affordable housing management, the Legal knowledge,
        Marketing and sales
      </p>

      <div className="bg-[#C0C0C0] h-[0.05rem] w-full my-6 mb-8" />

      <div className="flex items-center justify-between mb-3">
        <p className="text-2xl font-semibold mb-3">Servicing areas</p>
        <p className="font-semibold text-[#E36957] text-lg cursor-pointer">
          view all
        </p>
      </div>
      <div className="flex flex-wrap justify-start gap-3 mb-3">
        {ServicingAreas?.map((area) => (
          <div
            key={area}
            className="flex space-x-2 p-3 px-5 mb-3 items-center border border-[#C0C0C0] rounded-full"
          >
            <HiLocationMarker className="text-[#340E62]" />
            <p className="text-sm font-medium">{area}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo;
