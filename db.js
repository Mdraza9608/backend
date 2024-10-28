const mongoose = require('mongoose');
const mongoURI ='mongodb+srv://kmdraza47:SdUCeJlLAKSaAWxP@cluster0.tk8iv.mongodb.net/GoFoodmern?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected!');
      let fetched_data = mongoose.connection.db.collection("food_items");
      let data=await fetched_data.find({}).toArray() 
       
      let fetched_catdata = mongoose.connection.db.collection("foodCategory");
      let catdata=await fetched_catdata.find({}).toArray() 

      global.food_items= data;
      global.foodCategory= catdata;

     ////console.log(global.food_items)
    } catch (error) {
      console.log('err: ', error);
    }
  };

module.exports = mongoDB;