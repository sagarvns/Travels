import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../public/images/Logo.png.png';

const Header = () => {
  const [dateTime, setDateTime] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      });
      const time = now.toLocaleTimeString();
      const hour = now.getHours();

      let greet = 'Good Morning';
      if (hour >= 12 && hour < 17) greet = 'Good Afternoon';
      else if (hour >= 17) greet = 'Good Evening';

      setDateTime(`${date} | ${time}`);
      setGreeting(greet);
    };

    updateDateTime();
    const timer = setInterval(updateDateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-section">
          <img src={logo} alt="ANT Logo" className="logo" />
          <div className="tagline">WE MAKE TRAVEL JOYFUL</div>
        </div>

        <div className="date-time">
          <span>{dateTime}</span>
          <span className="greeting">{greeting}</span>
        </div>

        <div className="contact-info">
          <div className="toll">Toll free : <span>18001027408</span></div>
          <div className="email">sales@anttravels.com</div>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Navbar */}
      <nav className={`nav-bar ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {["HOME", "BUS TICKET", "BUS HIRE", "CAR HIRE", "TRAVELLER HIRE", "GALLERY", "ONLINE PAYMENT", "SEND ENQUIRY", "CONTACT US"].map(link => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
