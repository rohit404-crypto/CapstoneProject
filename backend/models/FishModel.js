const mongoose = require('mongoose')


const FishProducts = new mongoose.Schema({ 
  
    name: { 
        type: String, 
        require: true
    }, 
    imageurl:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    },
    rating:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    }
   
}) 

const Fishmodel = new mongoose.model("FishProducts", FishProducts);
module.exports = Fishmodel;