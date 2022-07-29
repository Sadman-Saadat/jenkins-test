var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});

app.listen(5000);

//dekhi jenkins e aumatic change dhorte pare kina
