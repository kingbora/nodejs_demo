var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/login').get(function(req, res){
	res.render('login', {title: '用户登录'});
}).post(function(req, res){
	var user = {
		username: 'kingbora',
		password: '123456'
	}
	if (req.body.username === user.username && req.body.password === user.password) {
		req.session.user = user;
		res.redirect('/home');
	} else {
		res.redirect('/login');
	}
});

router.get('/logout', function(req, res) {
	req.session.user = null;
	res.redirect('/');
});

router.get('/home', function(req, res) {
	res.render('home', {title: 'Home'});
})

module.exports = router;
