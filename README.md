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
<p>在浏览器中输入http://localhost:3000
或者[点击该处](http://localhost:3000)即可看见运行结果</p>
## 使用bower初始化前端项目目录
### 1、全局安装bower
<code>$ npm install bower -g</code>
### 2、初始化bower配置文件
<code>$ bower init</code>
<p>提示：默认的依赖是放置在bower_components目录下，这并不是我们想要的，因为在 Express项目中默认的静态文件放置在public目录下，所以需要设置放置目录为public目录</p>
### 3、在工程目录下创建配置文件.bowerrc(名字固定)，配置信息如下：
<code>
{
<br>
	"directory":"public/lib"
<br>
}
</code>
### 4、安装前端库文件
<code>$ bower install bootstrap --save</code>
