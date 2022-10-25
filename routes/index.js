// express.Router()로 router 객체 생성
var express = require('express');
var router = express.Router();

// router도 HTTP 메서드들에 대한 요청을 처리할 수 있다.
// 이 라우터는 '/' 주소로 들어오는 get 요청에 대한 처리를 정의해 놓았다.
// 콜백 함수를 통해 요청(req), 응답(res) 객체를 사용할 수 있다.
// 현재의 라우터에서 다음 라우터로 넘어가고자 할 때는 이 next() 함수를 사용하여 다음 라우터로 넘어갈 수 있다.
// ex) next('route') 주소와 일치하는 라우터로 이동
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', '');
});

router.get('/menu', function(req, res, next) {
  res.render('menu', '');
});

router.get('/login', function(req, res, next) {
  res.render('login', '');
});

router.get('/signup', function(req, res, next) {
  res.render('signup', '');
});

router.get('/notice', function(req, res, next) {
  res.render('notice', '');
});

router.get('/test_menu', function(req, res, next) {
  res.render('test_menu', '');
});

router.get('/test', function(req, res, next) {
  res.render('test', '');
});

router.get('/header', function(req, res, next) {
  res.render('header', '');
});

router.get('/edit', function(req, res, next) {
  res.render('edit', '');
});

router.get('/admin_menu', function(req, res, next) {
  res.render('admin_menu', '');
});
// req -> 만약 주소에 파라미터 값이 넘어 올 때, 파라미터 값을 ':파라미터 값' 형식으로 처리 가능하다.
// 이 경우는 주소로 들어온 'id'를 조회하려면 req.param 객체를 조회하면 된다.(req.param.id)
// router.get('/users/:id', function(req, res) {
//   console.log(req.params, req.query);
// });

// res -> 라우터 처리에 에러가 발생하지 않았다면, 라우터는 응답을 보내 주어야 한다.
// 응답 메서드는 send, sendFile, json, redirect 등이 있다.
module.exports = router;
