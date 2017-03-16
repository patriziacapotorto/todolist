var express = require('express');
var router = express.Router();

var Todos = require('./controller.js')


//LISTA COSE DA FARE
router.get('/', Todos.getTodo);

//CANCELLA COSE DA FARE
router.delete('/id/:id', Todos.deleteTodo);

//CREO UNA COSA DA FARE
router.post('/', Todos.createTodo);

//DETTAGLIO DI UNA COSA DA FARE
router.get('/id/:id', Todos.dettaglioTodo);

//AGGIORNA UTENTE
router.put('/id/:id', Todos.updateTodo);



module.exports = router;
