var mongoose = require('mongoose');

var keystrokeSchema = new mongoose.Schema({
  // user id?
  character: String,
  count: {type: Number, default: 0}
});

keystrokeSchema.methods.initialize = function () {

};

module.exports = mongoose.model('Keystroke', keystrokeSchema);