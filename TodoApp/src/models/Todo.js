let mongoose = require('mongoose');
let User = require('./User')

let Todo= mongoose.model('Todo', {
    title : String,
    description : String,
    createDateTime : Date,
    creator : {
        type : mongoose.Schema.Types.ObjectId, 
        ref : "User"
    },
    done : Boolean
})

module.exports = Todo