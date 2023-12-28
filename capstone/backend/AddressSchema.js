const mongoose = require("mongoose")



const UserAddress = new mongoose.Schema({ 
    country: { 
        type: String, 
        require: true
    }, 
    name: { 
        type: String, 
        require: true
    }, 
    mobilenumber:{
        type:String,
        require:true
    },
    flat:{
        type:String,
        require:true
    },
    area:{
        type:String,
        require:true
    },
    pincode:{
        type:String,
        require:true
    },
    town:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    }
   
}) 
  
const address = new mongoose.model("userAddressdata", UserAddress)

module.exports = address;