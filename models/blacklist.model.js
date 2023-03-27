const mongoose=require("mongoose")
const bcrypt = require('bcrypt');

const blacklistSchema=new mongoose.Schema({
    token:{
      type:String,
      required:true
    }
  })
  const blackListModel = mongoose.model('blacklist',blacklistSchema );
  
module.exports={
    blackListModel 
}