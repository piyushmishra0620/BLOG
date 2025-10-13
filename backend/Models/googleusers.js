const mongoose=require('mongoose');

const googleUserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    emailid:{type:String,required:true},
    image:{type:String,required:true}
});

const googleUsers = mongoose.model("googleUser",googleUserSchema);

module.exports={googleUsers};