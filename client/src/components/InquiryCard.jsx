import { BiSolidStar } from 'react-icons/bi';

const InquiryCard = () => {
  return (
    <div className="w-[23rem] rounded-lg mb-5 border border-gray-400 p-5 hover:shadow-xl overflow-hidden">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img className="h-14 mr-3" src={require("../img/profileIcon.png")} alt="Profile" />
          <div>
            <p className="text-lg font-semibold">Mr. XYZ</p>
            <p className="text-orange-500">+91 9988786791</p>
          </div>
        </div>
        <div className="flex items-start text-green-500 font-semibold">
          <BiSolidStar className="mr-2 mt-1" />
          <p>4.4</p>
        </div>
      </div>
      <p className="text-right text-gray-600 text-xs font-medium mt-4 mb-3">Posted on 12/10/2023</p>
      <p className="text-sm font-medium text-justify">
        The Property's location, size of the property, number of rooms or units, features and amenities, age of the property, condition of the property, and price. Also about the surrounding area, such as nearby schools, also the public transportation, shopping centers, and parks. Also about the lease terms, security deposits, and move-in dates.
      </p>
    </div>
  );
};

export default InquiryCard;
