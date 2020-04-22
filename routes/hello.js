var express = require('express');
var hello = express();

/* GET users listing. */
hello.get('/', function(req, res, next) {
  res.send('Hello VBMS Service USER from helloRouter GET!');
})

hello.post('/', function(req, res, next) {
  res.send('Hello VBMS Service USER from helloRouter POST!');
})

module.exports = hello;