import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // Use useNavigate for page navigation
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Textdoc.css';

const Textdoc = () => {
    const [doctor, setDoctor] = useState(null);
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [responseQueue, setResponseQueue] = useState([
        { sender: 'doctor', text: "Yes, I have them ready. I've noticed your BP is quite high." },
        { sender: 'doctor', text: "Focus on diet, don't stress out too much." },
    ]);

    const navigate = useNavigate(); // Use useNavigate for redirection
    const { doctorName } = useParams(); // Get doctor name from URL

    const doctors = [
        { name: 'Dr. Emily Carter', specialty: 'General Practitioner', pfp: 'https://randomuser.me/api/portraits/women/40.jpg' },
        { name: 'Dr. John Doe', specialty: 'Cardiologist', pfp: 'https://randomuser.me/api/portraits/men/43.jpg' },
        { name: 'Dr. Sarah Smith', specialty: 'Dermatologist', pfp: 'https://randomuser.me/api/portraits/women/41.jpg' },
    ];

    useEffect(() => {
        if (doctorName) {
            const selectedDoctor = doctors.find(d => d.name === decodeURIComponent(doctorName)); // Decode URI to handle special characters
            if (selectedDoctor) {
                setDoctor(selectedDoctor);
            }
        }
    }, [doctorName]);

    const startChat = (selectedDoctor) => {
        setDoctor(selectedDoctor);
        navigate(`/textdoc/${selectedDoctor.name}`); // Use navigate for redirection
    };

    const handleSendMessage = () => {
        if (userMessage.trim()) {
            setMessages([...messages, { sender: 'patient', text: userMessage }]);
            setUserMessage('');
        }
    };

    useEffect(() => {
        if (messages.length > 0 && messages[messages.length - 1].sender === 'patient') {
            setIsTyping(true);
            const nextResponse = responseQueue.shift();
            setTimeout(() => {
                setMessages((prevMessages) => [
                    ...prevMessages,
                    nextResponse,
                ]);
                setIsTyping(false);
                setResponseQueue(responseQueue);
            }, 5000); // Simulate typing delay
        }
    }, [messages]);

    return (
        <div className="textdoc-container">
            <Header />
            <Navbar />
            <div className="textdoc-content">
                
                {!doctor ? (
                    <div className="doctor-list-container">
                        <h2>Talk to Your Doctor</h2>
                        <div className="doctor-list">
                            {doctors.map((doctor, index) => (
                                <div key={index} className="doctor-card">
                                    <img src={doctor.pfp} alt={doctor.name} className="doctor-pfp" />
                                    <div className="doctor-info">
                                        <h3>{doctor.name}</h3>
                                        <p>{doctor.specialty}</p>
                                    </div>
                                    <button onClick={() => startChat(doctor)} className="chat-button">
                                        Chat
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="chat-container">
                        <div className="doctor-header">
                            <img
                                src="https://img.icons8.com/?size=100&id=60636&format=png&color=000000" // Replace with your arrow icon path
                                alt="Back"
                                className="back-arrow-icon"
                                onClick={() => navigate('/textdoc/main')} // Navigate back to /textdoc on click
                            />
                            <img
                                src={doctor.pfp}
                                alt={doctor.name}
                                className="doctor-pfp"
                            />
                            <div className="doctor-info">
                                <h3>{doctor.name}</h3>
                                <p>{doctor.specialty}</p>
                            </div>
                            <button onClick={() => navigate('/video_call')} className="video-call-button">
                                Start a Video Call
                            </button>
                        </div>
                        <div className="chat-box">
                            <div className="messages">
                                {messages.map((message, index) => (
                                    <div key={index} className={`message ${message.sender}`}>
                                        <p>{message.text}</p>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="typing-indicator">
                                        <span>Doctor is typing...</span>
                                    </div>
                                )}
                            </div>
                            <div className="send-message">
                                <input
                                    type="text"
                                    value={userMessage}
                                    placeholder="Type a message..."
                                    onChange={(e) => setUserMessage(e.target.value)}
                                />
                                <button onClick={handleSendMessage}>Send</button>
                                <button onClick={() => navigate('/video_call')} className="video-call-button">
                                    Video Call
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Textdoc;
