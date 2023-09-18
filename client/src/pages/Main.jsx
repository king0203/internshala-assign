import React from "react";
import Header from "../components/Header";
import Property from "../components/Property";
import RatingCard from "../components/RatingCard";
import Footer from "../components/Footer";
import Member from "../components/Member";
import Service from "../components/Service";
import Inquiry from "../components/Inquiry";
import User from "../components/User";
import UserInfo from "../components/UserInfo";

const Main = () => {
  

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  

  return (
    <div>
      <Header />
      <div className="p-10">
        <div className="flex space-x-5 ">
          <div>
            <User props={currentUser} />
            <UserInfo props={currentUser} />
          </div>

          <div className=" w-[44rem]">
            <div className="border border-[#C0C0C0] p-5 rounded-lg">
              <div className="flex items-center justify-between mb-5">
                <p className="text-2xl font-semibold">Our Team Members</p>
                <p className="font-semibold text-[#E36957] text-lg w-20 xl:w-fit cursor-pointer">
                  view all
                </p>
              </div>
              {Array(5)
                .fill("")
                .map((e, index) => (
                  <Member key={index} />
                ))}
            </div>

            <Service />
          </div>
        </div>

        <Property title={"Properties for sale"} rent={false} />
        <Property title={"Properties for rent"} rent={true} />

        <Inquiry />

        <div className="mt-5">
          <div className="flex items-center justify-between mb-3">
            <p className="text-2xl font-semibold mb-3">Ratings & Reviews</p>
            <p className="font-semibold text-[#E36957] text-lg cursor-pointer">
              view all
            </p>
          </div>
          <div className="flex justify-end space-x-5">
            <div className="relative select-none">
              <div className="absolute text-xs left-3 top-4">Filter by:</div>
              <select className="border border-[#C0C0C0] rounded-lg py-3 outline-none font-bold text-sm pl-14 px-10 ">
                <option value="ALL">All</option>
                <option value="HIGH">High</option>
                <option value="LOW">Low</option>
              </select>
            </div>
            <div className="relative select-none">
              <div className="absolute text-xs left-3 top-4">Sorted by:</div>
              <select className="border border-[#C0C0C0] rounded-lg py-3 outline-none font-bold text-sm pl-16 px-8">
                <option value="ALL">All</option>
                <option value="NEW" selected>
                  Newest
                </option>
                <option value="OLD">Oldest</option>
              </select>
            </div>
          </div>
          <RatingCard />
          <RatingCard />
          <div className="text-[#E36957] text-center w-52 text-sm font-bold border-2 border-[#E36957] px-8 py-3 rounded-lg cursor-pointer hover:text-white hover:bg-[#E36957] mt-10  mx-auto">
            <p>VIEW ALL REVIEWS</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
