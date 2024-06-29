const mongoose = require("mongoose");

//define the mongodb connection url
const mongoUrl = "mongodb://localhost:27017/hotels"

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