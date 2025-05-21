import React from 'react';
import { FaMapMarkerAlt, FaLeaf } from 'react-icons/fa';
import { BsDot } from 'react-icons/bs';

const ActiveUserCard = ({ filterUser }) => {
    const {  name
, image
, location, 
specialty
 } = filterUser;
    
  return (
    <div className="card w-full aspect-square md:w-[200px] md:h-[200px] lg:w-[200px] lg:h-[200px] bg-base-100 shadow-lg hover:shadow-xl transition duration-200 relative">
      
      {/* Active Badge */}
      <div className="absolute top-2 right-2 flex items-center gap-1 bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-[2px] rounded-full">
        <BsDot className="text-green-600 text-lg" />
        Active
      </div>

      {/* Image */}
      <figure className="flex justify-center items-center h-1/2">
        <img
          src={image}
          alt="User"
          className="w-[80px] h-[80px] rounded-full object-cover border-2 border-green-500"
        />
      </figure>

      {/* Info */}
      <div className="card-body p-2 text-xs h-1/2 justify-evenly">
        {/* Name */}
        <h3 className="text-center font-semibold text-gray-800">{name}</h3>

        <div className="flex items-center gap-1 text-gray-600">
          <FaMapMarkerAlt className="text-green-600" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          <FaLeaf className="text-emerald-500" />
          <span>{specialty}</span>
        </div>
      </div>
    </div>
  );
};

export default ActiveUserCard;
