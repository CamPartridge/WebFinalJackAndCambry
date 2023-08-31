var express = require('express');
var router = express.Router();
const dal = require("../data/userdata.mongo.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', {});
});


module.exports = router;
