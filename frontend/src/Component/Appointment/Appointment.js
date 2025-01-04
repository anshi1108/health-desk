import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Appointment.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const AppointmentScheduler = () => {
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    meetingType: 'online', // default to online
  });
  const navigate = useNavigate();

  const handleInputChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSchedule = () => {
    if (formData.meetingType === 'online') {
      // Generate a meeting link (e.g., random room ID)
      const roomId = `room-${Math.random().toString(36).substring(7)}`;
      navigate(`/textdoc?roomId=${roomId}&doctor=${formData.doctor}`);
    } else {
      alert('Offline meeting scheduled.');
    }
  };

  return (
    <div className="appointment">
      <Header/>
      <Navbar/>
      <div className="appointment-scheduler">
        <h2>Schedule an Appointment</h2>
        <form onSubmit={e => e.preventDefault()}>
          <label>
            Doctor:
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleInputChange}
            >
              <option value="Dr. Emily Carter">Dr. Emily Carter</option>
              <option value="Dr. John Doe">Dr. John Doe</option>
              <option value="Dr. Sarah Smith">Dr. Sarah Smith</option>
            </select>
          </label>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Meeting Type:
            <select
              name="meetingType"
              value={formData.meetingType}
              onChange={handleInputChange}
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </label>
          <button onClick={handleSchedule}>Schedule</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default AppointmentScheduler;
