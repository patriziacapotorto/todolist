var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoSchema = new Schema({
                   titolo: {
                        type: String,
                        required: [true,'Devi inserire il titolo']
                         },
                   descrizione: {
                         type: String,
                         required: [true,'Devi inserire la descrizione']
                       },
                    fatto: {
                      type: Boolean,
                      default: false
                    }
});


var Todos = mongoose.model('Todos', todoSchema);
module.exports = Todos;
