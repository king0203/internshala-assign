import React from "react";
import InquiryCard from "./InquiryCard";

const Inquiry = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-2xl font-semibold mb-3">My inquiries</p>
        <p className="font-semibold text-[#E36957] text-lg cursor-pointer">
          view all
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <InquiryCard />
        <InquiryCard />
        <InquiryCard />
      </div>
    </div>
  );
};

export default Inquiry;
