let passport = require('passport');
let config = require('../config/settings');
require('../config/passport')(passport);
let express = require('express');
let jwt = require('jsonwebtoken');
let router = express.Router();
let User = require("../models/user.model");

router.post('/register', function(req, res) {
    if (!req.body.fullName || !req.body.username || !req.body.password) {
      res.json({success: false, msg: 'Please pass full name, username and password.'});
    } else {
      let newUser = new User({
        fullName: req.body.fullName,
        username: req.body.username,
        password: req.body.password
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Username already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
});

router.post('/login', function(req, res) {
  User.findOne({
    username: req.body.username
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
    } else {
      // check if password matches
      user.comparePassword(req.body.password, function (err, isMatch) {
        if (isMatch && !err) {
          // if user is found and password is right create a token
          let token = jwt.sign(user.toJSON(), config.secret);
          // return the information including token as JSON
          res.json({success: true, token: 'JWT ' + token});
        } else {
          res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
        }
      });
    }
  });
});

router.post('/logout', passport.authenticate('jwt', { session: false}), function(req, res) {
  req.logout();
  res.json({success: true});
});

module.exports = router;
