const mongoose = require ('mongoose')

const AdoptionSchema = new mongoose.Schema({
    image :{
        type :"string",
        require:"true"
    },
    name :{
        type :"string",
        require:"true"
    },
    breed:{
        type:"string",
        require:"true"
    },
    guardianname :{
        type :"string",
        require:"true"
    },
    location :{
        type :"string",
        require:"true"
    },
    phonenumber :{
        type :"string",
        require:"true"
    },
    sex:{
        type:"string",
        require:"true"
    },
    desc:{
        type:"string",
        require:"true"
    }

    
})

const adoption = new mongoose.model('Adoption',AdoptionSchema)
module.exports = adoption