let mongoose = require('mongoose')

let User = mongoose.model('User', {
    email : { type: String, required : true},
    name : { type : String, required : true},
    password:{ type: String, required: true },
    tokens : [{type:String}]
})

module.exports = User