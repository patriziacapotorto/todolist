module.exports= function(app, express, path){
app.use('/js',express.static(path.join(__dirname,"..","..","client","js")));
app.use('/css',express.static(path.join(__dirname,"..","..","client","css")));
app.use('/bootsrap',express.static(path.join(__dirname,"..","..","node_modules","bootsrap","dist")));
app.use('/angular',express.static(path.join(__dirname,"..","..","node_modules","angular")));
app.use('/angular-ui-router',express.static(path.join(__dirname,"..","..","node_modules","angular-ui-router")));
app.use('/jquery',express.static(path.join(__dirname,"..","..","node_modules","jquery","dist")));

//ROTTA PER L'INDEX
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname,"..","..","client","index.html"));
});
var bodyparser = require('body-parser');
app.use(bodyparser.json());

app.use('/api/todolist',require('./../risorse/todolist/index.js'));

 };
