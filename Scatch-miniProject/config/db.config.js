const mongoose =  require('mongoose');
require('dotenv').config();
// const dbgr = require('debug')("devlopment:mongoose");

const url = process.env.MONGO_URI;

mongoose.connect(url)
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})

module.exports = mongoose.connection;
