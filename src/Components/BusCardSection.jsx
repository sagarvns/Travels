import React from 'react';
import './BusCardSection.css'; 
import bus1 from '../../public/images/bus1.jpg';
import bus2 from '../../public/images/bus2.jpg';
import bus3 from '../../public/images/bus3.jpg';

const busData = [
  {
    title: 'Luxury Double Decker Bus',
    desc: 'Enjoy panoramic views and ample seating on our luxury double-decker bus—ideal for large group travel in style.',
    image: bus1,
    rating: 4.5,
  },
  {
    title: 'Standard Tourist Bus',
    desc: 'Comfortable and spacious, our standard tourist bus is perfect for city tours, day trips, or long-distance travel.',
    image: bus2,
    rating: 4.5,
  },
  {
    title: 'Executive Coach',
    desc: 'Experience executive-level comfort with reclining seats, air conditioning, and advanced amenities—ideal for long journeys in ultimate luxury.',
    image: bus3,
    rating: 4.5,
  },
  {
    title: 'Luxury Double Decker Bus',
    desc: 'Enjoy panoramic views and ample seating on our luxury double-decker bus—ideal for large group travel in style.',
    image: bus1,
    rating: 4.5,
  },
];

const BusCardSection = () => {
  return (
    <div className="bus-section-wrapper">
      <h2 className="bus-heading">Best Bus Hire Service in Delhi NCR for Tourists</h2>
      <p className="bus-subheading">
    Whether you're planning a weekend getaway, a family trip, or a corporate tour, our bus rental service in Delhi NCR 
    ensures comfort, safety, and affordability. With a wide range of luxury, standard, and executive coaches, we 
    guarantee a smooth and memorable travel experience for every passenger.
  </p>
      <div className="bus-section">
        {busData.map((bus, idx) => (
          <div className="bus-card" key={idx}>
            <img src={bus.image} alt={bus.title} className="bus-image" />
            <div className="stars">⭐⭐⭐⭐✰</div>
            <h3>{bus.title}</h3>
            <p>{bus.desc}</p>
            <button className="view-btn">View Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusCardSection;
