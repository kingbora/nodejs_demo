创建Express应用
1、全局安装nodejs
$ npm install nodejs -g
2、全局安装express-generator初始化项目
$ npm install express-generator -g
3、使用ejs模块的名称为myapp的web应用
$ express --ejs myapp
4、下载相关依赖
$ npm install
5、运行Express应用
$ node bin/www
在浏览器中输入http://localhost:3000即可看见运行结果

使用bower初始化前端项目目录
1、全局安装bower
$ npm install bower -g
2、初始化bower配置文件
$ bower init
提示：默认的依赖是放置在bower_components目录下，
这并不是我们想要的，因为在 Express项目中默认的静态文件放置在public目录下，
所以需要设置放置目录为public目录
3、在工程目录下创建配置文件.bowerrc(名字固定)，配置信息如下：
{
	"directory":"public/lib"
}
4、安装前端库文件
$ bower install bootstrap --save