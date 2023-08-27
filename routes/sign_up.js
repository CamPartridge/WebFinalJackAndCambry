var express = require('express');
var router = express.Router();
const dal = require("../data/userdata.mongo.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign_up', { title: 'Sign Up' });
});


router.post('/', async function(req, res, next){
  console.log("hit")
  
  var user = {
    username : await req.body.username,
    email: await req.body.email,
    password: await req.body.password,
    age: await req.body.age,
    where_will: await req.body.where_will,
    when_will: await req.body.when_will,
    grass: await req.body.grass,
  }
  await dal.CreateUser(user)
  res.render('sign_up', { title: 'Sign Up' });
})

module.exports = router;
