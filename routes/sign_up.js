var express = require('express');
var router = express.Router();
const dal = require("../data/userdata.mongo.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sign_up', { title: 'Sign Up' });
});


router.post('/', async function(req, res, next){
  console.log("hit")
  // let username = await req.body.username
  // let email = await req.body.email
  // let password = await req.body.password
  // let age = await req.body.age
  // let where_will = await req.body.where_will
  // let when_will = await req.body.when_will
  // let grass = await req.body.grass
  
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
  
})

module.exports = router;
