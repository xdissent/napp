var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  var body = 'napp\n';
  res.header('Content-Length', body.length.toString());
  res.send(body);
});

app.listen(port)
console.log('napp running on http://localhost:' + port);
