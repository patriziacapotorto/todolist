var express = require('express');
var app = express(); //lancio express
var path = require('path');
var bodyparser = require('body-parser');

// app.use(bodyparser.urlencoded({extended: false}));
// app.use(bodyparser.json());
// app.use(bodyparser.text());
// app.use('/images', express.static(path.join(__dirname,'..','client','immagini')));

// //SERVO LA INDEX.HTML
// app.get('/', function(req,res){
//   res.sendFile(path.join(__dirname,"..","client","index.html"));
// });
//
// var utenti = require('./utenti/utenti.js');
// app.use("/users",utenti);

app.listen(3000, function(){
  console.log("server in ascolto su http://localhost:3000");
});
