import { useState } from 'react';
import { FaThumbsUp, FaCommentAlt, FaShare, FaUserCircle } from 'react-icons/fa';

const GardeningTipDetails = ({ tip }) => {
  const {
    title,
    plantType,
    difficulty,
    category,
    imageUrl,
    description,
    availability,
    userName,
    email,
    like,
    _id,
  } = tip;

  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(like || 0);

  const handleLikeClick = () => {
   

    setLikesCount((prev) => prev + 1);
    setLiked(true);

    // Update to backend
    fetch(`https://b11a10-server-side-iamfreak-production.up.railway.app/tips/${_id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ like: likesCount + 1 }),
    });
  };

  return (
    <div className="max-w-2xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-4">
          <FaUserCircle className="w-12 h-12 rounded-full object-cover ring-2 ring-green-400" />
          <div className="flex-1">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              {userName}
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
               {availability === 'Public' ? '🌍 Public' : '🔒 Hidden(Only For Authorized Users)'}
            </p>
          </div>
        </div>

        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-[400px] object-cover"
        />

        {/* Content */}
        <div className="px-4 py-5 space-y-3 text-sm sm:text-base">
          <h3 className="font-bold text-xl sm:text-2xl text-green-700">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 text-sm mt-2">
            <p>
              <strong>🌱 Plant Type:</strong> {plantType}
            </p>
            <p>
              <strong>⚙️ Difficulty:</strong> {difficulty}
            </p>
            <p>
              <strong>📂 Category:</strong> {category}
            </p>
          </div>

          {/* Likes Count */}
          <div className="flex items-center justify-between pt-4 text-sm text-gray-600 border-t">
            <span>{likesCount} ❤️ Likes</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 text-sm sm:text-base font-semibold">
            <button
              onClick={handleLikeClick}
              className={`flex items-center justify-center gap-2 bg-amber-200 hover:bg-green-400  py-2 rounded-lg w-full transition text-base`}
            >
              <FaThumbsUp className="text-lg" />
              {liked ? 'Liked' : 'Like'}
            </button>

            <button className="flex items-center justify-center gap-2 bg-blue-100 text-blue-700 hover:bg-blue-200 py-2 rounded-lg w-full transition text-base">
              <FaCommentAlt className="text-lg" />
              Comment
            </button>

            <button className="flex items-center justify-center gap-2 bg-purple-100 text-purple-700 hover:bg-purple-200 py-2 rounded-lg w-full transition text-base">
              <FaShare className="text-lg" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GardeningTipDetails;
