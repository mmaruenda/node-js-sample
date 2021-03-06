var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

var data;
try{
  data = fs.readFileSync('index.html');
} catch (e) {
 throw e;
}

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
