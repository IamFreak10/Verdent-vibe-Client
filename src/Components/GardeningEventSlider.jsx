// Import Swiper React components & modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const GardeningEventSlider = () => {
  const events = [
    {
      title: '🌱 Spring Garden Workshop',
      desc: 'Learn planting basics, composting, and garden design with expert botanists.',
      date: 'March 25, 2025 — 10:00 AM to 4:00 PM',
      image: 'https://i.postimg.cc/cJ1Bs4zR/1708424859023.jpg',
    },
    {
      title: '🌼 Urban Balcony Gardening',
      desc: 'Turn your small space into a lush green paradise with our balcony gardening guide.',
      date: 'April 12, 2025 — 1:00 PM to 5:00 PM',
      image: 'https://i.postimg.cc/C1zCqrSd/Screen-Shot-2021-08-25-at-9-38-08-AM-1.webp',
    },
    {
      title: '🌿 Sustainable Gardening 101',
      desc: 'Master eco-friendly methods, rainwater harvesting, and soil health tips.',
      date: 'May 5, 2025 — 9:00 AM to 3:00 PM',
      image: 'https://i.postimg.cc/d0WmDcMz/green-gardening-tips-sustainability-649081a35d9a1.avif',
    },
  ];

  return (
    <div className="w-[90%]  mx-auto my-10 rounded-3xl">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="rounded-xl"
      >
        {events.map((event, index) => (
          <SwiperSlide  key={index}>
            <div className="bg-transparent w-full h-full flex flex-col md:flex-row items-center justify-center rounded-xl shadow-xl overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full md:h-[580px] w-full md:w-1/2 object-cover"
              />
              <div className="p-8 md:px-8 md:py-30 md:w-1/2 md:h-[580px] text-center md:text-left bg-green-50">
                <h2 className="text-3xl font-bold mb-2 text-green-800">
                  {event.title}
                </h2>
                <p className="text-gray-700 mb-3">{event.desc}</p>
                <p className="text-sm font-medium text-green-600 mb-4">
                  📅 {event.date}
                </p>
                <button className="btn bg-green-600 hover:bg-green-700 text-white rounded-full px-6">
                  Join Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GardeningEventSlider;
