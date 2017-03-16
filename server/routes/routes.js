var path=require('path');
var bodyparser=require('body-parser');
module.exports=function(app,express,path){

app.use(bodyparser.json());
app.use('/bootstrap',express.static(path.join(__dirname,'..','..','node_modules','bootstrap','dist')));
app.use('/jquery',express.static(path.join(__dirname,'..','..','node_modules','jquery','dist')));
app.use('/',express.static(path.join(__dirname,'..','..','client')));
app.use('/js',express.static(path.join(__dirname,'..','..','client','js')));
app.use('/angular',express.static(path.join(__dirname,'..','..','node_modules','angular')));
app.use('/angular-ui-router',express.static(path.join(__dirname,'..','..','node_modules','angular-ui-router')));

//rotte statiche
app.get('/', function(req,res){
res.sendFile(path.join(__dirname, '..', '..', 'client','index.html'));
})
//rotta per la todolist
app.use('/api/todolist', require('./../risorse/todolist'));

};
