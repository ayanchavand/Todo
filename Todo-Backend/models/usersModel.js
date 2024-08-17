const mongoose = require('mongoose')

const Schema = mongoose.Schema

//database structure
const userSchema = new Schema({
    user: {
        type:String,
        required:true
     },
    todoList:{
        type:Array,
        required:  true
    } 
})

module.exports = mongoose.model('user', userSchema)