const mongoose = require('mongoose')


const products = new mongoose.Schema({ 
  
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
    }
   
}) 

const Productmodel = new mongoose.model("products", products);
module.exports = Productmodel;