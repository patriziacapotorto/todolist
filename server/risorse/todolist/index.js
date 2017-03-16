var express = require('express');
var router = express.Router();

var Todos = require('./controller.js')


//LISTA COSE DA FARE
router.get('/', Todos.getTodo);

//CANCELLA COSE DA FARE
router.delete('/', Todos.deleteTodo);


module.exports = router;
