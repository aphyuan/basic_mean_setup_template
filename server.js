//standard express setup
var express = require('express');
app = express();
path = require('path');

//app use
app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));

//connect
app.listen(8000, function() {});
