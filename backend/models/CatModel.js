const mongoose = require('mongoose')


const CatProducts = new mongoose.Schema({ 
  
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

const Catmodel = new mongoose.model("CatProducts", CatProducts);
module.exports = Catmodel;