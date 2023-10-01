const mongoose = require('mongoose');


const userShema= new mongoose.Schema({
  story: { type: String, required: true },
    prompt: { type: String, required: true },
    likes: Number,
    dislikes: Number
  })
  // creating and exportins ids 
const Stories=mongoose.model('stories',userShema)
module.exports=Stories