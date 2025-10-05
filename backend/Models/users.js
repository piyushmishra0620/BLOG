const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username :{type:String,required:true},
    emailid :{type:String,required:true,unique:true},
    password :{type:String,required:true,unique:true}
});

const users = mongoose.model('users',userSchema);

module.exports = {users}
