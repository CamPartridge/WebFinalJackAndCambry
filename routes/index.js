var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Willfully Living', username: 'testusername' });
});


module.exports = router;
