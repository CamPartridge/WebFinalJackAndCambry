var express = require('express');
var router = express.Router();
const dal = require('../data/userdata.mongo');
const session = require('express-session');
const security = require('../security/password');

router.use(express.json())

router.get('/', function(req, res, next) {
  res.render('sign_in', { title: 'Sign in' });
});

router.post('/', async (req, res) => {
  let userData = await dal.GetUserByEmail(req.body.email) 
    if (userData) {
      console.log(req.body.password)
      let isPasswordValid = await security.comparePassword(req.body.password, userData.password)
      if (isPasswordValid) {
        req.session.isAuthenticated = true
        req.session.user = userData;
        console.log(req.session)
        res.redirect('/');
      } else {
        res.send("Invalid password")
      }
    } else {
      console.log('No user match')
    }
  })

module.exports = router;
