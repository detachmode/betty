var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.send('<p>some html</p>');
  res.sendFile(__dirname + '/public/index.html');

  //res.render('index', { title: 'Express' });
});

var sys = require('sys')
var exec = require('child_process').exec;
router.post('/', function (req, res, next) {

  function puts(error, stdout, stderr) { res.send(stdout); }
  exec("ls -la", puts);

});

module.exports = router;
