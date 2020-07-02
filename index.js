//index.js

﻿var express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
var app = express(); //express를 실행하여 app object를 초기화 합니다.
var fs = require('fs'); //파일 로드하는데 사용

var axios = require("axios");
var cheerio = require("cheerio");

app.get('/', function(req, res) { // '/' 위치에 'get'요청을 받는 경우,
  // res.send('Hello World!'); // "Hello World!"를 보냅니다.
  fs.readFile('stock.html', function(error,data){
  	if(error){
  		console.log(error);
  	}else{
  		res.writeHead(200, {'Content-Type':'text/html'});
  		res.end(data);
  	}
  });
});

app.post('/stock', function(req, res){
  console.log('req.data is ............ '+req.data);
  var data = req.data.data;
  console.log('POST data === '+data);
})

var port = 3000; // 사용할 포트 번호를 port 변수에 넣습니다. 
app.listen(port, function(){ // port변수를 이용하여 3000번 포트에 node.js 서버를 연결합니다.
  console.log('server on! http://localhost:'+port); //서버가 실행되면 콘솔창에 표시될 메세지입니다.
});





