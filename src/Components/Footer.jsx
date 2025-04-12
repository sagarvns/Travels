import React from "react";
import "./Footer.css";

const Footer = () => {
  const sections = {
    "USE FULL LINK": [
      "Blog", "About Us", "Distance Chart", "Travel Tips", "Photo Gallery", "Wedding Transport"
    ],
    "BOOK A CAR": [
      "Swift Dzire Car Hire", "Toyota Etios Car Hire", "Honda City Car Hire",
      "Toyota Innova Car Hire", "Toyota Fortuner Car Hire", "Toyota Innova Crysta Car"
    ],
    "CAR / COACH HIRE": [
      "Bus Hire for Wedding Purpose", "Car Hire for Wedding Purpose", "Mini Bus Hire",
      "Car Hire for Outstation", "9 Seater Traveller Hire", "17 Seater Traveller Hire"
    ],
    "PAYMENTS DETAILS": [
      "Payment", "Bank Details", "Feed Back", "Disclaimer", "Cancellation & Refund",
      "Terms & Conditions", "Privacy Policy", "Download Invoice"
    ]
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {Object.entries(sections).map(([heading, items]) => (
          <div className="footer-column" key={heading}>
            <h3>{heading}</h3>
            <ul>
              {items.map((item, index) => (
                <li key={index}><a href="#">{item}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>© Copyright ANT Travels Group, All Rights Reserved.</p>
        <div className="footer-socials">
          <span>Follow Us:</span>
          <a href="#"><i className="fab fa-facebook-square" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-google-plus-g" /></a>
          <a href="#"><i className="fab fa-youtube" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
