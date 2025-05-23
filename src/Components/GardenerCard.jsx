import React from 'react';
import {
  FaMapMarkerAlt,
  FaLeaf,
  FaUser,
  FaInfoCircle,
  FaLightbulb,
} from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const GardenerCard = ({ user }) => {
  return (
    <Fade triggerOnce direction="up">
      <div className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <figure>
          <img
            src={user?.image}
            alt={user?.name}
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body text-center p-6 space-y-2">
          <h2 className="card-title justify-center text-xl font-bold">
            {user?.name}
          </h2>

          <div className="flex justify-center gap-2 text-sm text-gray-500">
            <span className="badge badge-outline">Age: {user?.age}</span>
            <span className="badge badge-outline">Gender: {user?.gender}</span>
          </div>

          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <FaLeaf className="text-green-600" /> {user?.specialty}
          </p>

          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-pink-500" /> {user?.location}
          </p>

          <div className="mt-2">
            <span
              className={`badge px-4 py-2 ${
                user?.active ? 'badge-success' : 'badge-neutral'
              }`}
            >
              {user?.active ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="text-sm text-gray-600 flex items-center justify-center gap-2 mt-2">
            <FaInfoCircle className="text-blue-500" />
            {user?.experiences}
          </div>

          <div className="text-sm text-yellow-600 font-medium flex items-center justify-center gap-2 mt-2">
            <FaLightbulb className="text-yellow-400" />
            Shared Tips: {user?.totalSharedTips}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default GardenerCard;
