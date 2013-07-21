var express = require('express'),
    app = express(),
    port = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('nappy');
});

app.listen(port)
console.log('napp running on http://localhost:' + port);