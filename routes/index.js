var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 4' });
});

/* GET Connor page. */
router.get('/connor', function(req, res, next) {
  res.render('connor', { title: 'Connor' });
});

/* GET Kyle page. */
router.get('/kyle', function(req, res, next) {
  res.render('kyle', { title: 'Kyle' });
});

/* GET Cecelia page. */
router.get('/cecelia', function(req, res, next) {
  res.render('cecelia', { title: 'Cecelia' });
});

/* GET Tom page. */
router.get('/tom', function(req, res, next) {
  res.render('tom', { title: 'Tom' });
});

module.exports = router;
