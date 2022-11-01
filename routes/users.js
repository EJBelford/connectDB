var express = require('express');
var users   = express();

/* GET users listing. */
users.get('/', function(req, res, next) {
  res.send('Users GET respond with a resource');
})

module.exports = users;
