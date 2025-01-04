// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Home from './Component/Home/Home';
import ChatbotModal from './Component/Chatbot/ChatbotModal';
import Dashboard from './Component/Dashboard/Dashboard';
import Records from './Component/Records/Records';
import AppointmentScheduler from './Component/Appointment/Appointment';
import Textdoc from './Component/Textdoc/Textdoc';
import VideoCall from './Component/VideoCall/Screens/Lobby';
import Room from './Component/VideoCall/Screens/Room';
import NearbyHospitals from './Component/NearbyHospitals/NearbyHospitals'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/records' element={<Records />} />
        <Route path='/appointment-scheduling' element={<AppointmentScheduler/>}/>
        <Route path='/textdoc/main' element={<Textdoc />} />
        <Route path="/textdoc/:doctorName" element={<Textdoc />} />
        <Route path='/video_call' element={<VideoCall />} />
        <Route path='/video_call/room/:roomId' element={<Room />} />
        <Route path='/hospital-locator' element={<NearbyHospitals/>}/>
      </Routes>
      <ChatbotModal/>
    </div>
  );
}

export default App;
