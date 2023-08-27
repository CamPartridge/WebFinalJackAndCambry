var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('will_to_live', { title: 'Renew Will to Live' });
});

module.exports = router;
