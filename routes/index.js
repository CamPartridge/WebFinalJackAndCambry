var express = require('express');
var router = express.Router();
const dal = require("../data/userdata.mongo.js")

/* GET home page. */
router.get('/', async function(req, res, next) {
  let numOfUsers = await dal.GetNumberOfUsers()
  let chart1data = await getChart1data(numOfUsers)
  let chart2data = await getChart2data(numOfUsers)
  let chart3data = await getChart3data(numOfUsers)
  res.render('index', {title:"Willingly living", chart1data:chart1data,chart2data:chart2data, chart3data:chart3data});
  
});

async function getChart1data(numOfUsers) {
  let answer1 = 0
  let answer2 = 0
  let answer3 = 0
  let answer4 = 0

  for (i = 0; i < numOfUsers; i++) {
    let userData = await dal.GetUserByID(i)
    switch (userData.where_will) {
      case "1":
        answer1++
        break
      case "2":
        answer2++
        break
      case "3":
        answer3++
        break
      case "4":
        answer4++
        break
    }
  }
  return [answer1,answer2,answer3,answer4]
}

async function getChart2data(numOfUsers) {
  let answer1 = 0
  let answer2 = 0
  let answer3 = 0
  let answer4 = 0

  for (i = 0; i < numOfUsers; i++) {
    let userData = await dal.GetUserByID(i)
    switch (userData.when_will) {
      case "1":
        answer1++
        break
      case "2":
        answer2++
        break
      case "3":
        answer3++
        break
      case "4":
        answer4++
        break
    }
  }
  return [answer1,answer2,answer3,answer4]
}

async function getChart3data(numOfUsers) {
  let answer1 = 0
  let answer2 = 0
  let answer3 = 0
  let answer4 = 0

  for (i = 0; i < numOfUsers; i++) {
    let userData = await dal.GetUserByID(i)
    switch (userData.grass) {
      case "1":
        answer1++
        break
      case "2":
        answer2++
        break
      case "3":
        answer3++
        break
      case "4":
        answer4++
        break
    }
  }
  return [answer1,answer2,answer3,answer4]
}


module.exports = router;
