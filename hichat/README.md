

作者: [毛姗春](https://github.com/msc2318700141)

## 安装

- git clone https://github.com/msc2318700141/hichat.git
- cd hichat
- npm install


##新增m数据库存储
### 1. npm install mysql
### 2.新增数据库 sql 如下
CREATE TABLE `chat`.`message_history` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL DEFAULT '',
  `content` varchar(255) NOT NULL DEFAULT '',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;


##启动
- node app.js
- 监听3000端口

##需要技术
- [nodejs](https://nodejs.org)
- [jade](https://github.com/pugjs/jade)
- [socket.io](http://socket.io/)
- [gulp](http://gulpjs.com/)
- [gulp-less](https://npmjs.org/package/gulp-less/)
- [gulp-clean](https://www.npmjs.com/package/gulp-clean)


## 注
### 1.仅修改了PageService.js新增mysql控件
### 2.仅存储了消息内容和发送方
### 3.可以通过以下修改sql，存入需要的数据
`mysql
var sql = 'insert into message_history(`user_name`,`content`) values("'+ socket.nickname + '","' + message + '")'
connection.query(sql, function (error, results, fields) {
  if(error){
    console.log('[INSERT ERROR] - ',error1.message);
    return;
    }
});
`
