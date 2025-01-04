const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const {Server} = require('socket.io');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://sadneyasam05:root@cluster0.7gxwyxh.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define User Schema
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  role: {type: String, enum: ['Doctor', 'Patient'], required: true},
  createdAt: {type: Date, default: Date.now},
});

// Create User Model
const User = mongoose.model('User', userSchema);


// API Routes
app.post('/api/users', async (req, res) => {
  const {name, email, role} = req.body;

  if (!name || !email || !role) {
    return res
      .status(400)
      .json({message: 'All fields (name, email, role) are required'});
  }

  try {
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists'});
    }

    const newUser = new User({name, email, role});
    await newUser.save();

    res.status(201).json({message: 'User created successfully', user: newUser});
  } catch (err) {
    res.status(500).json({message: 'Internal server error'});
  }
});

app.get('/api/users/:email', async (req, res) => {
  const {email} = req.params;

  try {
    const user = await User.findOne({email});
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({message: 'User not found'});
    }
  } catch (err) {
    res.status(500).json({message: 'Internal server error'});
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// mongodb+srv://sadneyasam05:root@cluster0.7gxwyxh.mongodb.net/?retryWrites=true&w=majority
