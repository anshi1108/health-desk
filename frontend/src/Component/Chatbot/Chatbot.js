import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Chatbot.css';
import chaticon from '../../Image/health.png';

// Health-related keywords
const healthKeywords = [
  'fever',
  'headache',
  'cold',
  'cough',
  'flu',
  'medicine',
  'doctor',
  'hospital',
  'prescription',
  'symptoms',
  'treatment',
  'pain',
  'vaccine',
  'allergy',
  'nutrition',
  'exercise',
  'health tips',
  'mental health',
  'blood pressure',
  'diabetes',
  'heart disease',
  'stress',
  'wellness',
  'sleep',
  'hydration',
  'vitamins',
  'medical advice',
  'emergency',
  'first aid',
  'care',
  'sick',
];

// Check if the message contains health-related terms
const isHealthRelatedMessage = message => {
  return healthKeywords.some(keyword =>
    message.toLowerCase().includes(keyword.toLowerCase())
  );
};

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const initialGreeting = {
      user: '',
      bot: 'Hello! How can I assist you with health-related queries?',
    };
    setResponses([initialGreeting]);
  }, []);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    if (input.trim() === '') return;

    const userMessage = {user: input};

    if (!isHealthRelatedMessage(input)) {
      setResponses(prev => [
        ...prev,
        {...userMessage, bot: 'Sorry, I couldn’t understand your query.'},
      ]);
      setInput('');
      return;
    }

    try {
      const response = await axios.post(
        'https://chatgpt-42.p.rapidapi.com/conversationgpt4-2',
        {messages: [{role: 'user', content: input}]},
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'x-rapidapi-ua': 'RapidAPI-Playground',
            'x-rapidapi-key':
              '68ff9939c8msh2c3041494ed290dp148805jsn89dbb091c75b',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
          },
        }
      );

      const botResponse = response.data.result;

      // Truncate response if too long
      const maxLength = 143; // Set your desired max length
      const displayResponse =
        botResponse.length > maxLength
          ? `${botResponse.substring(0, maxLength)}...`
          : botResponse;

      setResponses(prev => [
        ...prev,
        {...userMessage, bot: displayResponse, fullResponse: botResponse},
      ]);

      setInput('');
      setError('');
    } catch (err) {
      console.error('Error fetching response:', err);
      setError('Error: Unable to connect to the bot.');
    }
  };

  const handleExpand = fullResponse => {
    setResponses(prev => {
      const newResponses = [...prev];
      const lastResponse = newResponses.pop();
      const expandedResponse = {...lastResponse, bot: fullResponse};
      newResponses.push(expandedResponse);
      return newResponses;
    });
  };

  return (
    <>
      <div className="main-container">
        <div className="chatbot-container">
          <div className="chatbot-box">
            <div className="chatbot-header">
              <div className="user-icon">
                <img src={chaticon} alt="Chat Icon" />
              </div>
              <div>HealthBot</div>
            </div>
            <div className="chatbot-response">
              {responses.map((resp, index) => (
                <div key={index} className="chatbot-message">
                  {resp.user && (
                    <div className="user-message">
                      <strong>You:</strong> {resp.user}
                    </div>
                  )}
                  {resp.bot && (
                    <div className="bot-message">
                      <div className="bot-box">
                        <strong>Bot:</strong> {resp.bot}
                        {resp.fullResponse &&
                          resp.fullResponse.length > 143 && (
                            <span
                              className="read-more"
                              onClick={() => handleExpand(resp.fullResponse)}
                            >
                              Read more...
                            </span>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="chatbot-input-group">
              <input
                type="text"
                className="chatbot-input"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your health query..."
              />
              <button className="chatbot-button" onClick={handleSubmit}>
                Send
              </button>
            </div>
            {error && <div className="chatbot-error">{error}</div>}
            <p style={{color: 'gray', fontSize: '14px', marginTop: '15px'}}>
              <b>
                **Note:** This chatbot provides general information and
                guidance. Please consult with healthcare professionals or
                doctors for personalized advice.
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
