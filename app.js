var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// express 패키지를 호출해 app 변수 객체를 만든다.
var app = express();

// app.set()으로 익스프레스 앱을 설정한다.
// view engine setup
app.set('views', path.join(__dirname, 'views'));

// 여기서 views 에서 사용할 엔진을 고르는건데 이거 어떡하지
// app.set('view engine', 'pug');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// app.use는 미들웨어를 연결하는 부분이다. (미들웨어는 반드시 next()를 호출해야 다음 미들웨어로 넘어감)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// user() 메서드가 아닌 HTTP 메서드 (GET, POST, PUT, DELETE) 를 사용해서 HTTP 요청 처리 가능
// app.use('/', function(req, res, next) {
//   console.log('/ 주소로 들어오는 모든 HTTP 메소드 요청을 처리합니다.');
//   next();
// });
// app.get('/', function(req, res, next) {
//   console.log('/ 주소로 들어오는 GET 메서드 요청을 처리합니다.');
//   next();
// });
// app.post('/data', function(req, res, next) {
//   console.log('/ 주소로 들어오는 POST 메서드 요청을 처리합니다.');
//   next();
// });

// app 객체를 모듈로 만든다.
module.exports = app;
