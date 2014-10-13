var express = require('express');
var router = express.Router();

var app = require('../app.js');

/* GET container listing. */
router.get('/', function(req, res) {
  res.send('You are in the right place for the container...!');
});

router.get('/add', function(req, res) {
  var cObjs = app.getCloudObjs()
  console.log(cObjs)
  var len = cObjs.length + 1
  var obj = {id : len, name : 'Cloud Obj'+ len }
  app.addCloudObjs(obj)
  console.log('added.')
  console.log(obj)
  console.log(app.getCloudObjs())
  app.io.emit('container:add',obj)
  res.send('Cloud container added: ' + obj.name)
})

module.exports = router;
