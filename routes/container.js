var express = require('express');
var router = express.Router();

var app = require('../app.js');

/* GET container listing. */
router.get('/', function(req, res) {
  res.send('You are in the right place for the container...!');
});

router.get('/add', function(req, res) {
  app.io.emit('container:add', {id:2,name:'sample container' })
  res.send('chumma')
})

module.exports = router;
