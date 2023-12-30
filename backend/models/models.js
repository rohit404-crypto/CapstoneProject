const mongoose = require("mongoose")



const User = new mongoose.Schema({ 
    email: { 
        type: String, 
        require: true,
        unique: true
    }, 
    password: { 
        type: String, 
        require: true
    }, 
    petname:{
        type:String,
        require:true
    },
    petguardian:{
        type:String,
        require:true
    }
   
}) 
  
const usermodel = new mongoose.model("userdata", User)

module.exports = usermodel;