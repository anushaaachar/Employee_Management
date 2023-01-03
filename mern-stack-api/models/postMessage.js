const mongoose = require('mongoose')

var PostMessage = mongoose.model('PostMessage',
{
    Name : {type:String},
    Department : {type:String},
    DOB : {type:Date},
    PhoneNumber:{type:String},
    Address:{type:String},
},'postMessages')

module.exports = { PostMessage}