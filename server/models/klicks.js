var mongoose = require('mongoose');

var klicksSchema = new mongoose.Schema({
  url: String,  // corresponds to the url where the recording happens
  linkUrl: { type: String, default: '' },  // corresponds to the url which a user will click on and redirect to the recording
  width: Number,  // width of the window where the recording happens
  height: Number,  // height of the window where the recording happens
  description: { type: String, default: '' },
  ticks: [{
    action: String,
    pageX: Number,  // x coordinate relative to the entire page
    pageY: Number,
    clientX: Number,  // x coordinate relative to the viewport
    clientY: Number,
    timestamp: Number,
    target: { type: String, default: '' }, // need a default value to be blank
    charCode: { type: Number, default: -1 }, // applies only for keypress actions
    altKey: { type: Boolean, default: false }, // applies only for keypress actions
    ctrlKey: { type: Boolean, default: false }, // applies only for keypress actions
    metaKey: { type: Boolean, default: false }, // applies only for keypress actions
    shiftKey: { type: Boolean, default: false } // applies only for keypress actions
  }]
});

module.exports = mongoose.model('Klicks', klicksSchema);