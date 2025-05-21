// TipSwiper.jsx
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHeart } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Type from './Type';

const TipSwiper = () => {
  const [stips, setStips] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/sixtips')
      .then((res) => res.json())
      .then((data) => setStips(data));
  }, []);
  console.log(stips);
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <Type></Type>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {stips.map((tip) => (
          <SwiperSlide key={tip.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="h-48 w-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-primary">{tip.title}</h2>
                <p>{tip.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="badge badge-success">{tip.category}</span>
                  <span className="flex items-center text-gray-500 gap-1">
                    <FaHeart className="text-red-500" /> {tip.likes}
                  </span>
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
