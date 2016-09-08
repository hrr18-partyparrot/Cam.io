var mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({
  name: String,
  desc: String,
  promoters: [],
  owner: String,
  gPoint: String,
  gReward: String,
  sPoint: String,
  sReward: String,
  bPoint: String,
  bReward: String,
  eventbrite: {},
  created_at: {type:Date, default: Date.now}
});
module.exports = mongoose.model("Event", eventSchema);