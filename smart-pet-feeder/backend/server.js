const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const FeedEvent = require('./models/FeedEvent');  // Import the FeedEvent model

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/smartpetfeeder', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes
app.post('/data', async (req, res) => {
  const { distance, duration, status } = req.body;
  const newFeedEvent = new FeedEvent({ distance, duration, status });
  await newFeedEvent.save();
  res.send('Data saved');
});

app.get('/data', async (req, res) => {
  const data = await FeedEvent.find();
  res.json(data); 
});

// Start the server
app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
