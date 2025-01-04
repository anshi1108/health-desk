import React from 'react';
import './Dashboard.css';
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Header />
            <Navbar />
            <div className="dashboard-content">
    
                <div className="main-content-dashboard">
                    <div className="welcome-message">
                        <h2>Welcome to Your Health Dashboard</h2>
                        <p>Here you can easily manage your healthcare records, schedule appointments, chat with your doctor, and more. Navigate through the cards to get started.</p>
                    </div>
                    <div className="profile-section">
                        <div className="profile-card">
                            <img
                                className="profile-pfp"
                                src="https://citizensketcher.com/wp-content/uploads/2022/05/thispersondoesnotexist_43-1.jpg"
                                alt="Profile"
                            />
                            <div className="profile-details">
                                <h3>Johnny Flynn</h3>
                                <p>Age: 28</p>
                                <p>Gender: Male</p>
                                <a href="/profile" className="view-record-link">
                                    View Full Record and Medical History
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Last Checkup Section */}
                    <div className="last-checkup-section">
                        <h3>Recent Checkups</h3>
                        <table className="last-checkup-table">
                            <thead>
                                <tr>
                                    <th>Doctor's Name</th>
                                    <th>Date & Time</th>
                                    <th>Reason</th>
                                    <th>Special Notes</th>
                                    <th>Document</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Dr. Emily Carter</td>
                                    <td>December 15, 2024, 10:30 AM</td>
                                    <td>Routine Checkup</td>
                                    <td>Blood pressure slightly elevated</td>
                                    <td>
                                        <a href="/full-document" className="checkup-link">
                                            View Full Document
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dr. Mark Lewis</td>
                                    <td>November 10, 2024, 3:00 PM</td>
                                    <td>Dental Checkup</td>
                                    <td>Cavities detected in molars</td>
                                    <td>
                                        <a href="/full-document" className="checkup-link">
                                            View Full Document
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dr. Sarah Miller</td>
                                    <td>October 5, 2024, 11:15 AM</td>
                                    <td>Eye Checkup</td>
                                    <td>Minor vision problems, recommended glasses</td>
                                    <td>
                                        <a href="/full-document" className="checkup-link">
                                            View Full Document
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Dr. John Peterson</td>
                                    <td>September 20, 2024, 9:00 AM</td>
                                    <td>Heart Checkup</td>
                                    <td>Normal results, but recommended regular monitoring</td>
                                    <td>
                                        <a href="/full-document" className="checkup-link">
                                            View Full Document
                                        </a>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="dashboard-cards">
                        <div className="dashboard-card">
                            <img
                                src="https://png.pngtree.com/thumb_back/fh260/background/20210730/pngtree-doctor-background-writing-medical-advice-on-folder-medical-record-image_754578.jpg"
                                alt="Healthcare Records"
                                className="card-image"
                            />
                            <h4>Healthcare Records</h4>
                            <a href="/records">View Records</a>
                        </div>
                        <div className="dashboard-card">
                            <img
                                src="https://thumbs.dreamstime.com/b/hospital-map-pin-icon-flat-illustration-hospital-map-pin-vector-icon-web-design-hospital-map-pin-icon-flat-style-116839872.jpg"
                                alt="Nearby Hospital Locator"
                                className="card-image"
                            />
                            <h4>Nearby Hospital Locator</h4>
                            <a href="/hospital-locator">Find Hospitals</a>
                        </div>
                        <div className="dashboard-card">
                            <img
                                src="https://dexatel.com/images/blog/135/cover/patient-appointment-scheduling.webp"
                                alt="Schedule Appointment"
                                className="card-image"
                            />
                            <h4>Schedule Appointment</h4>
                            <a href="/appointment-scheduling">Book Now</a>
                        </div>
                        <div className="dashboard-card">
                            <img
                                src="https://www.gigadocs.com/blog/wp-content/uploads/2020/08/senior-woman-video-calling-doctor_274689-5683.jpg"
                                alt="Video Call Scheduling"
                                className="card-image"
                            />
                            <h4>Video Call Scheduling</h4>
                            <a href="/video-call">Schedule Video Call</a>
                        </div>
                        <div className="dashboard-card">
                            <img
                                src="https://qupapp.com/assets/img/services/00-07.png"
                                alt="Texting with Doctor"
                                className="card-image"
                            />
                            <h4>Texting with Doctor</h4>
                            <a href="/doctor-chat">Start Chat</a>
                        </div>
                        <div className="dashboard-card">
                            <img
                                src="https://media.istockphoto.com/id/1041766914/vector/chat-bot-online-doctor.jpg?s=612x612&w=0&k=20&c=T9-P3Mnd3FdUdn_O3bb5VEPmaea0y7eDFmSPz7exlPM="
                                alt="Chatbot"
                                className="card-image"
                            />
                            <h4>Chatbot</h4>
                            <a href="/chatbot">Chat Now</a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
