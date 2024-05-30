// models/FeedingEvent.js
const mongoose = require('mongoose');

const feedingEventSchema = new mongoose.Schema({
  timestamp: {
    type: Date,
    default: Date.now
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    default: {}
  }
}, {
  timeseries: {
    timeField: 'timestamp',
    metaField: 'metadata',
    granularity: 'seconds'
  },
  expireAfterSeconds: 86400
});

module.exports = mongoose.model('FeedingEvent', feedingEventSchema);
