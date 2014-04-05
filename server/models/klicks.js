var mongoose = require('mongoose');

var klicksSchema = new mongoose.Schema({
  url: String,
  linkUrl: { type: String, default: "" },
  width: Number,
  height: Number,
  description: String,
  ticks: [{
    action: String,
    pageX: Number,
    pageY: Number,
    clientX: Number,
    clientY: Number,
    timestamp: Date,
    target: { type: String, default: "" }, // need a default value to be blank
    charCode: { type: Number, default: -1 }, // applies only for keypress actions
    altKey: { type: Boolean, default: false }, // applies only for keypress actions
    ctrlKey: { type: Boolean, default: false }, // applies only for keypress actions
    metaKey: { type: Boolean, default: false }, // applies only for keypress actions
    shiftKey: { type: Boolean, default: false } // applies only for keypress actions
  }]
});

// keystrokeSchema.methods.initialize = function () {

// };

module.exports = mongoose.model('Klicks', klicksSchema);