var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.sendFile(__dirname+'/index.html');
});


var port = process.env.PORT || 4001;

var server = app.listen(port, function(request, response) {
  console.log("Server is up and running on http://localhost:"+port);
});