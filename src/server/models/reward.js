var mongoose = require('mongoose');


var rewardSchema = new mongoose.Schema({
  name: String,
  type: [],
  description: String,
});


module.exports = mongoose.model('Reward', rewardSchema);