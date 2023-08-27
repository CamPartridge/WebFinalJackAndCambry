var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var signinRouter = require('./routes/sign_in');
var signupRouter = require('./routes/sign_up');
var willtoliveRouter = require('./routes/will_to_live');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/signin', signinRouter);
app.use('/signup', signupRouter);
app.use('/willtolive', willtoliveRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


app.post('/signup', async function(req, res, next){
  console.log("hit")
  let username = await req.body.username
  let email = await req.body.email
  let password = await req.body.password
  let age = await req.body.age
  let where_will = await req.body.where_will
  let when_will = await req.body.when_will
  let grass = await req.body.grass

  await dal.CreateUser({username, email, password,age, where_will, when_will, grass})
  
})


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
