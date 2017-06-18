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

router.get('/google', function (req, res, next) {
  // router.
  // res.redirect('http://localhost:8080')
  res.redirect('http://google.com')
});


router.get('/myWiki', function (req, res, next) {
  // router.
  res.redirect('http://localhost:8080')
  //res.redirect('http://google.com')
});

module.exports = router;
