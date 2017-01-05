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
<p>在浏览器中输入[http://localhost:3000](http://localhost:3000)即可看见运行结果</p>
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