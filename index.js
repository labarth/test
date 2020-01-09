var express = require('express');
var path = require('path');
var http = require('http');
var cookieParser = require('cookie-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
