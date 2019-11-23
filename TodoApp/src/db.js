let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

let User = mongoose.model('User', 
{
    email : String,
    name : String
})


exports.User = User