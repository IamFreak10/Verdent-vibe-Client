import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaEye, FaHeart, FaUser } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Type from './Type';
import { useNavigate } from 'react-router';

const TipSwiper = () => {
  const navigate = useNavigate();
  const [stips, setStips] = useState([]);

  useEffect(() => {
    fetch('https://b11a10-server-side-iam-freak10.vercel.app/tips')
      .then((res) => res.json())
      .then((data) => setStips(data));
  }, []);

  stips.sort((a, b) => b.like - a.like);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Type />
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {stips.slice(0, 6).map((tip) => (
          <SwiperSlide key={tip._id}>
            <div className="card mb-8 bg-white shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
              {/* Header */}
              <div className="flex items-center gap-3 p-4 border-b bg-gray-50">
                <FaUser className="text-gray-400 text-xl" />
                <div>
                  <h3 className="text-sm font-bold text-gray-800 dark:text-white">
                    {tip.userName || 'User'}
                  </h3>
                  <p className="text-xs text-gray-500">{tip.category}</p>
                </div>
              </div>

              {/* Image */}
              <figure>
                <img
                  src={tip.imageUrl}
                  alt={tip.title}
                  className="w-full h-48 object-cover"
                />
              </figure>

              {/* Body */}
              <div className="card-body px-4 pt-4 pb-2 h-36 overflow-hidden">
                <h2 className="text-lg font-semibold text-gray-800">
                  {tip.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3">
                  {tip.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex justify-between items-center px-4 py-3 border-t text-sm bg-gray-50">
                <span className="badge badge-outline badge-success">
                  {tip.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="flex items-center text-gray-600 gap-1">
                    <FaHeart className="text-red-500 text-xl" /> {tip.like}
                  </span>
                  <button
                    onClick={() => navigate(`/tip/${tip._id}`)}
                    className="btn  btn-outline btn-primary flex items-center gap-1"
                  >
                    <FaEye /> View
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TipSwiper;
