var mongoose = require('mongoose');

var keystrokeSchema = new mongoose.Schema({
  // user id?
  character: String,
  count: Number
});

// keystrokeSchema.methods.initialize = function () {

// };

module.exports = mongoose.model('Keystroke', keystrokeSchema);