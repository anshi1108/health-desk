import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/records">Healthcare Records</Link></li>
          <li><Link to="/hospital-locator">Nearby Hospital Locator</Link></li>
          <li><Link to="/appointment-scheduling">Schedule Appointment</Link></li>
          <li><Link to="/video_call">Video Call Scheduling</Link></li>
          <li><Link to="/textdoc/main">Text Your Doctor</Link></li>
          {/* <li><Link to="/chatbot">Chatbot</Link></li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
