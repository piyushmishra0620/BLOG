const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const connectoDB = async ()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Connection with database successful!");
    }catch(err){
        console.error(err);
    }
}

exports.connectoDB = {connectoDB} 
