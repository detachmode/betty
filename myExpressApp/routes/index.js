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
router.get('/commandResponse', function (req, res, next) {
  let cmd = req.query.cmdField

  exec(cmd, (error, stdout, stderr) => {
    console.log(stdout)
    console.error(stderr)
    res.send(stdout);
  });

});

module.exports = router;
