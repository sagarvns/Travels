import React from "react";
import "./VehicleGallery.css";

const vehicleServices = [
  {
    title: "Transportation Services",
    company: "PH Logistics",
    location: "New Delhi, Delhi",
    price: "₹ 15 / Km",
    image: "https://anttravels.com/transportImages/fortuner.png",
  },
  {
    title: "Delhi To Bangalore Truck Transport Services",
    company: "Track Route Logistics LLP",
    location: "New Delhi, Delhi",
    price: "₹ 45 / Km",
    image: "https://anttravels.com/transportImages/tttt7.JPG",
  },
  {
    title: "Container Truck Transportation Services",
    company: "Ammanya Logistics Private Limited",
    location: "New Delhi, Delhi",
    price: "₹ 80 / Km",
    image: "https://anttravels.com/transportImages/ttttttttttttttttttt1.jpg",
  },
  {
    title: "Transportation Services",
    company: "Sri Sai Enterprises",
    location: "New Delhi, Delhi",
    price: "₹ 24 / Km",
    image: "https://anttravels.com/transportImages/ttttttttttttttttt1.jpg",
  },
  {
    title: "12 Seater Luxury Tempo Traveller",
    company: "Ant Travels",
    location: "Delhi to Manali",
    price: "₹ 28 / Km",
    image: "https://anttravels.com/transportImages/tttttt6.jpg",
  },
  {
    title: "Luxury Coach for Family Trips",
    company: "Comfort Wheels Pvt Ltd",
    location: "Delhi to Shimla",
    price: "₹ 32 / Km",
    image: "https://anttravels.com/transportImages/fortuner.png",
  },
  {
    title: "AC Mini Bus – 12 Seater",
    company: "TravelOye Services",
    location: "Delhi Local Tour",
    price: "₹ 30 / Km",
    image: "https://anttravels.com/transportImages/ttt5.jpeg",
  },
  {
    title: "Deluxe Tourist Van",
    company: "JoyRide India",
    location: "Delhi to Jaipur",
    price: "₹ 26 / Km",
    image: "https://anttravels.com/transportImages/tttt7.JPG",
  },
  {
    title: "AC Mini Bus – 12 Seater",
    company: "TravelOye Services",
    location: "Delhi Local Tour",
    price: "₹ 30 / Km",
    image: "https://anttravels.com/transportImages/ttttttttttttttt2.jpg",
  },
  {
    title: "Deluxe Tourist Van",
    company: "JoyRide India",
    location: "Delhi to Jaipur",
    price: "₹ 26 / Km",
    image: "https://anttravels.com/transportImages/tt4.jpeg",
  },
];

const VehicleGallery = () => {
  return (
    <div className="vehicle-gallery">
      {vehicleServices.map((item, index) => (
        <div className="vehicle-card" key={index}>
          <img src={item.image} alt={item.title} className="vehicle-image" />
          <div className="vehicle-content">
            <h3 className="vehicle-title">{item.title}</h3>
            <p className="vehicle-company">{item.company}</p>
            <p className="vehicle-location">{item.location}</p>
            <p className="vehicle-price">{item.price}</p>
            <button className="view-number">
              📞 <span>View Number</span>
            </button>
            <button className="get-price">Get Best Price</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VehicleGallery;
