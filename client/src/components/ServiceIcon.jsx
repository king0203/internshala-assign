import React from "react";

const ServiceIcon = ({ img, title }) => {
  return (
    <div className="flex gap-2 p-3 w-[9rem] xl:w-[9.5rem] justify-center mb-4 items-center border border-[#C0C0C0] rounded-full">
      <img src={img} alt={title} className="h-4 object-contain" />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
};

export default ServiceIcon;
