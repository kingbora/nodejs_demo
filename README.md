## 创建Express应用
### 1、全局安装nodejs
<code>$ npm install nodejs -g</code>
### 2、全局安装express-generator初始化项目
<code>$ npm install express-generator -g</code>
### 3、使用ejs模块的名称为myapp的web应用
<code>$ express --ejs myapp</code>
### 4、下载相关依赖
<code>$ npm install</code>
### 5、运行Express应用
<code>$ node bin/www</code>
在浏览器中输入[http://localhost:3000](http://localhost:3000)
## 使用bower初始化前端项目目录
### 1、全局安装bower
<code>$ npm install bower -g</code>
### 2、初始化bower配置文件
<code>$ bower init</code>
<p>提示：默认的依赖是放置在bower_components目录下，这并不是我们想要的，因为在 Express项目中默认的静态文件放置在public目录下，所以需要设置放置目录为public目录</p>
### 3、在工程目录下创建配置文件.bowerrc(名字固定)，配置信息如下：
```json
{
	"directory":"public/lib"
}
```
### 4、安装前端库文件
<code>$ bower install bootstrap --save</code>
## 前端页面编写
### 1、Ejs模板
修改app.js，让ejs模板文件使用扩展名为html的文件
```js
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
```
修改完成后，重命名.ejs后缀的文件为.html为后缀，重启服务访问。
### 2、页面分离
将index.html分成三部分：
* header.html —— 页面头部区域
* index.html —— 页面内容区域
* footer.html —— 页面底部区域

<strong>header.html</strong>
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title><%= title %></title>
		<!-- Bootstrap -->
		<link href="/lib/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet" media="screen">
	</head>
	<body screen_capture_injected="true">
```
<strong>index.html</strong>
```html
<% include header.html %>
<h1><%= title %></h1>
<p>Welcome to <%= title %></p>
<% include footer.html %>
```
<strong>footer.html</strong>
```html
<script src="/lib/jquery/dist/jquery.min.js"></script>
<script src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>
```
重启服务，重新访问。
## 登陆案例
### 1、前端登陆页
<p>修改<strong>index.html</strong>,增加登录按钮</p>
```html
<% include header.html %>
<h1><%= title %></h1>
<p>Welcome to <%= title %></p>
<p><a href="/login">登录</a></p>
<% include footer.html %>
```
<strong>login.html</strong>
```html
<% include header.html %>
<div class="container">
	<form class="col-sm-offset-4 col-sm-4 form-horizontal" role="form" method="post">
		<fieldset>
			<legend>用户登录</legend>
			<div class="form-group">
				<label class="col-sm-3 control-label" for="username">用户名</label>
				<div class="col-sm-9">
					<input type="text" class="form-control" id="username" name="username" placeholder="用户名" required>
				</div>
			</div>
			<div class="form-group">
				<label class="col-sm-3 control-label" for="password">密码</label>
				<div class="col-sm-9">
					<input type="password" class="form-control" id="password" name="password" placeholder="密码" required>
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-offset-3 col-sm-9">
					<button type="submit" class="btn btn-primary">登录</button>
				</div>
			</div>
		</fieldset>
	</form>
</div>
<% include footer.html %>
```
<strong>home.html</strong>
```html
<% include header.html %>
<h1>Welcome <%= user.username %>,欢迎登录！！</h1>
<a class="btn" href="/logout">退出</a>
<% include footer.html %>
```
### 2、路由
打开app.js，增加路由配置：
```js
app.use('/', index);
app.use('/users', users);
app.use('/login', index);
app.use('/logout', index);
app.use('/home', index);
```
打开routes/index.js文件，添加对应的方法：
```js
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
		password: '520kingbora'
	}
	if (req.body.username === user.username && req.body.password === user.password) {
		res.redirect('/home');
	} else {
		res.redirect('/login');
	}
});

router.get('/logout', function(req, res) {
	res.redirect('/');
});

router.get('/home', function(req, res) {
	var user = {
		username: 'kingbora',
		password: '520kingbora'
	}
	res.render('home', {title: 'Home', user: user});
});

module.exports = router;
```
<p>重启服务，重新访问。</p>
### 3、session
安装中间件express-session:
<code>$ npm install express-session --save</code>
安装中间件connect-mongodb:
<code>$ npm install connect-mongodb --save</code>