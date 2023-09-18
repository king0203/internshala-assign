import Rating from "./Rating";
import { BiSolidStar } from "react-icons/bi";
import profileIcon from "../img/profileIcon.png";

const RatingCard = () => {
  return (
    <div className="py-3 rounded-lg">
      <div className="bg-gray-300 h-0.5 w-full my-3" />
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-4">
          <p className="font-semibold text-lg">Highly likely to recommend</p>
          <div className="flex items-center text-green-500 font-bold">
            <BiSolidStar className="mr-1 mt-1" />
            <p>4.4</p>
          </div>
        </div>
        <p className="font-semibold text-red-500 text-sm cursor-pointer">
          Report a Problem
        </p>
      </div>
      <div className="flex items-center my-3">
        <img className="h-10 mr-2" src={profileIcon} alt="Profile" />
        <div>
          <p className="text-lg font-semibold">Mr. XYZ</p>
          <p className="text-red-500">+91 9988786791</p>
        </div>
      </div>
      <p className="mb-3">
        Sold a Multiple Occupancy home in 2023 in Ridgewood, Ridgewood, NY.
      </p>
      <Rating name="Local knowledge" />
      <Rating name="Process expertise" />
      <Rating name="Responsiveness" />
      <p>
        The Property's location, size of the property, number of rooms or units,
        features and amenities, age of the property, condition of the property,
        and price. Also about the surrounding area, such as nearby schools, also
        the public transportation, shopping centers, and parks. Also about the
        lease terms, security deposits, and move-in dates. Also about the
        surrounding area. The Property's location, size of the property, number
        of rooms or units, features and amenities, age of the property,
        condition of the property, and price. Also about the surrounding area,
        such as nearby schools, also the public transportation, shopping
        centers, and parks.
      </p>
    </div>
  );
};

export default RatingCard;
