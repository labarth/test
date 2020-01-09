var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;
