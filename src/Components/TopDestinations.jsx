import React from 'react';
import './TopDestinations.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import one from '../../public/images/1.jpg';
import two from '../../public/images/2.jpg';
import three from '../../public/images/3.jpg';
import four from '../../public/images/4.jpg';
import five from '../../public/images/5.jpg';
import six from '../../public/images/6.jpg';


const destinations = [
  { name: 'Jaisalmer', image: one },
  { name: 'Agra', image: two },
  { name: 'Rann of Kutch', image: three },
  { name: 'Ooty', image: four},
  { name: 'Goa', image: five},
  { name: 'Goa', image: six},
];

const TopDestinations = () => {
  return (
    <div className="destinations-wrapper">
      <h2 className="title">Top destinations</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {destinations.map((place, index) => (
          <SwiperSlide key={index}>
            <div className="destination-card">
              <img src={place.image} alt={place.name} className="destination-img" />
              <p className="destination-name">{place.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopDestinations;
