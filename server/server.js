var express = require('express');
var app = express(); //lancio express
var path = require('path');


var mongoose = require('mongoose');
require('./config/database.js')(mongoose);

require('./routes/routes.js')(app, express, path);

app.listen(3000, function(){
  console.log("server in ascolto su http://localhost:3000");
});
