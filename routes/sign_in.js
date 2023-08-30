var express = require('express');
var router = express.Router();
const dal = require('../data/userdata.mongo')

router.use(express.json())

router.get('/', function(req, res, next) {
  res.render('sign_in', { title: 'Sign in' });
});

router.post('/', async (req, res) => {
  let userData = await dal.GetUserByEmail(req.body.email) 
    if (userData) {
      console.log('User data:', userData)
    } else {
      console.log('No user match')
    }
  })

module.exports = router;
