// routes/data.js
const express = require('express');
const router = express.Router();
const FeedingEvent = require('../models/FeedingEvent');

// POST new feeding event
router.post('/data', async (req, res) => {
  try {
    const { timestamp, distance, duration, status, metadata } = req.body;
    const event = new FeedingEvent({
      timestamp: timestamp ? new Date(timestamp) : undefined,
      distance,
      duration,
      status,
      metadata
    });
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// GET all feeding events
router.get('/data', async (req, res) => {
  try {
    const events = await FeedingEvent.find().sort({ timestamp: -1 });
    res.send(events);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;
