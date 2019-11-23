let mongoose = require('mongoose')

let User = mongoose.model('User', {
    email : String,
    name : String
})

module.exports = User