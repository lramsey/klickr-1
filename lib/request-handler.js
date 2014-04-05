var request = require('request');
var crypto = require('crypto');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

// Database
var db = require('../server/config');
var Klicks = require('../server/models/klicks');

var hostname = process.env.HOSTNAME || '127.0.0.1';
var port = process.env.KLICKR_PORT || 4568;

exports.renderIndex = function(req, res) {
  res.render('index');
};

exports.handleGetKlicks = function (req, res) {
  // need to query all data in db and send it back to client
  var klickId = req.params.id;

  Klicks.findById(klickId, function (err, klick) {
    if (!!err) {
      console.log("Error in GetKlicks");
      throw new Error('error', err);
    }
    console.log(typeof klick)
    res.send(200, klick);
  });
}

exports.handleGetAllKlicks = function (req, res) {
  // need to return all objects in database
  Klicks.find({}, function (err, klicks) {
    if (!!err) {
      console.log("Error in GetAllKlicks");
      throw new Error('error', err);
    }
    res.send(200, klicks)
  })
};

exports.handlePostKlicks = function (req, res) {
  var klickObj = new Klicks(req.body);
  var id = klickObj._id.toString();
  var url = klickObj.url;

  // console.log("Url is:", url);
  // console.log("Id is:", id);
  klickObj.linkUrl = '/?url=' + encodeURIComponent(url) + '&id=' + id;

  klickObj.save(function (err) {
    if (!!err) {
      console.log("Error in PostKlicks");
      throw new Error('error', err);
    }

    res.send(200, klickObj);
  });
};
