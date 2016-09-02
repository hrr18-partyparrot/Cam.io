var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  name: String,
  desc: String,
  promoters: [],
  promotions: [],
  currentPromotion: String,
  created_at: {type:Date, default: Date.now}
});

module.exports = mongoose.model("Event", eventSchema);