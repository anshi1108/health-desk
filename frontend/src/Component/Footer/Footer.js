import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-divider"></div>

            <div className="footer-container">
                <div className="footer-section">
                    <div className="footer-logo">
                        <img src="https://cdn-icons-png.flaticon.com/128/620/620399.png" alt="Logo" className="footer-logo-img" />
                        <p className="footer-logo-text">Health-Desk</p>
                        <p className="footer-description">
                            Your trusted platform for healthcare solutions and services. Stay healthy with us!
                        </p>
                    </div>
                </div>

                <div className="footer-section">
                    <h5>Quick Links</h5>
                    <ul className="footer-links">
                        <li><a href="#dashboard" className="footer-link">Dashboard</a></li>
                        <li><a href="#health-records" className="footer-link">Healthcare Records</a></li>
                        <li><a href="#hospital-locator" className="footer-link">Nearby Hospital Locator</a></li>
                        <li><a href="#appointment" className="footer-link">Schedule Appointment</a></li>
                        <li><a href="#video-call" className="footer-link">Video Call Scheduling</a></li>
                        <li><a href="#doctor-chat" className="footer-link">Texting with Doctor</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>Contact Us</h5>
                    <p>
                        Health-Desk, <br />
                        Mumbai, India, 400001 <br />
                        Phone: +91 98765 43210 <br />
                        Email: contact@healthdesk.com
                    </p>
                </div>

                <div className="footer-section">
                    <h5>Stay Updated</h5>
                    <form>
                        <div className="footer-input-group">
                            <input
                                type="email"
                                className="footer-input"
                                placeholder="Enter your email"
                                aria-label="Email"
                            />
                        </div>
                        <button type="submit" className="footer-btn">Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="footer-divider"></div>
            <div className="footer-bottom text-center">
                <p className="footer-bottom-text">© 2024 Health-Desk. All Rights Reserved. | Privacy Policy | Terms & Conditions</p>
            </div>
        </div>
    );
};

export default Footer;