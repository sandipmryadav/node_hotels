const mongoose = require("mongoose");
require('dotenv').config();

//define the mongodb connection url
const mongoUrl =process.env.MONGODB_URL
// const mongoUrl = process.env.MONGODB_URL_LOCAL;
mongoose.connect(mongoUrl)

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("Connection successfull");
});

db.on('error', (err)=>{
    console.error("Mongodb connection error", err);
});

db.on('disconnected', ()=>{
    console.log("MongoDb disconnected");
});

//export

module.exports= db;