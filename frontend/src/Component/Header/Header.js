import React, { useState, useEffect } from 'react';
import './Header.css';
import Login from '../Login/Login'; // Import your Navbar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [username, setUsername] = useState(''); // State for storing the username
    const navigate = useNavigate(); // Initialize navigate function

    // Fetch username from localStorage or context when component mounts
    useEffect(() => {
        const storedUsername = localStorage.getItem('username'); // Adjust if the username is stored elsewhere
        if (storedUsername) {
            setUsername(storedUsername);
        }
    }, []);

    const goHome = () => {
        navigate('/home'); // Redirect to /home when logo is clicked
    };

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <div>
            <div className="header">
                <div className="header-logo" onClick={goHome} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <img src="https://cdn-icons-png.flaticon.com/128/2847/2847965.png" alt="Logo" />
                    <span style={{ marginLeft: '12px', fontFamily: 'Poppins', fontSize: '25px', fontWeight: '600', color: '#34495e' }}>
                        Health-Desk
                    </span>
                </div>
                <div className="navbar-search">
                    <img src="https://cdn-icons-png.flaticon.com/128/751/751463.png" alt="Search" />
                    <input type="text" placeholder="Search for anything here..." />
                </div>
                <div className="navbar-profile" onClick={toggleNavbar} style={{ cursor: 'pointer' }}>
                    <img
                        src="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg"
                        alt="Profile"
                    />
                    <span className="profile-name">{username || 'Guest'}</span> {/* Display username or fallback to Guest */}
                </div>
            </div>
            {showNavbar && <Login />} {/* Conditionally render Navbar */}
        </div>
    );
};

export default Header;
