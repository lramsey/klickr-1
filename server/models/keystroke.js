var mongoose = require('mongoose');

var keystrokeSchema = new mongoose.Schema({
  keystroke: [{
    a: String,
    x: Number,
    y: Number,
    t: Date
  }]
});

// keystrokeSchema.methods.initialize = function () {

// };

module.exports = mongoose.model('Keystroke', keystrokeSchema);