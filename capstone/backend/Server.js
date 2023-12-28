const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const AddressSchema = require("./AddressSchema")
const adoptionSchema = require('./adoptionSchema')

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://suga:1234@cluster0.4h6ppke.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

  
  app.post("/address", async (req, res) => {
   
      console.log(req.body)
      try {
        const address = await AddressSchema.create({
          country: req.body.country,
          name: req.body.name,
          mobilenumber: req.body.mobilenumber,
          flat: req.body.flat,
          area: req.body.area,
          pincode: req.body.pincode,
          town: req.body.town,
          state: req.body.state,
          
  
        });
        return res.status(200).send({status: 'posted successfully'});
    } catch (err) {
      return res.status(500).send({error: 'error'});
    }
  });
  app.post("/adoption", async (req, res) => {
   
      console.log(req.body)
      try {
        const adoption = await adoptionSchema.create({
          image: req.body.image,
          name: req.body.name,
          breed: req.body.breed,
          guardianname: req.body.guardianname,
          location: req.body.location,
          phonenumber: req.body.phonenumber,
          
  
        });
        return res.status(200).send({status: 'posted successfully'});
    } catch (err) {
      return res.status(500).send({error: 'error'});
    }
  });

app.get('/adoptpets',async(req,res)=>{
  try{
    const pets=await adoptionSchema.find()
    return res.status(200).json(pets)
  }catch(err){
    return res.status(500).send('error')
  }
  
})

  app.listen(4000, () => {
    console.log("server started on port 4000");
  });