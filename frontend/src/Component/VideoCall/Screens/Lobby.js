import React, { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSocket } from '../Context/SocketProvider';
import './Lobby.css';
import Header from '../../Header/Header';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';

const LobbyScreen = () => {
  const [email, setEmail] = useState('');
  const [room, setRoom] = useState('');
  const socket = useSocket();  // Ensure this returns the socket instance
  const navigate = useNavigate();

  // Form submission handler
  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      if (email && room) {
        socket.emit('room:join', { email, room });
      }
    },
    [email, room, socket]
  );

  // Handle navigation when room join event is received
  const handleJoinRoom = useCallback(
    ({ email, room }) => {
      navigate(`/video_call/room/${room}`);
    },
    [navigate]
  );

  // Listen to socket event for room join and cleanup
  useEffect(() => {
    socket.on('room:join', handleJoinRoom);

    return () => {
      socket.off('room:join', handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div className="lobby-container">
      <Header />
      <div className="content">
        <Navbar />
        <div className="lobby-content">
          <h1>Lobby</h1>
          <form onSubmit={handleSubmitForm}>
            <label htmlFor="email">Email ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <label htmlFor="room">Room Number</label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
            <br />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LobbyScreen;
