var express = require('express');
var router = express.Router();
//var shell = require('shelljs');
var sys = require('sys')
var exec = require('child_process').exec;

/* GET home page. */
router.get('/', function (req, res, next) {
  // res.send('<p>some html</p>');
  res.sendFile(__dirname + '/public/index.html');

  //res.render('index', { title: 'Express' });
});


router.get('/commandResponse', function (req, res, next) {
  let cmd = req.query.cmdField


  exec(cmd, (error, stdout, stderr) => {
    console.log('Program output:' + stdout);
    console.log('Program stderr:'+  stderr);
    var content = stdout + stderr
    res.send("<html><div style='color:white; background-color:black;white-space: pre-wrap;'><pre>" + content + "</pre></div></html>");

  });

});

module.exports = router;
