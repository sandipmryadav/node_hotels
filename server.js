const express = require("express");
const app = express();
const db = require("./db");

const bodyParser =require('body-parser');
app.use(bodyParser.json());

const MenuItem = require("./models/MenuItem")

app.get("/", function (req,res){
    res.send("Hello")
});




//get method to get the person

//for a person
const personRoutes =require('./routes/personRoutes');
const menuItemRoutes =require('./routes/menuItemRoutes');

app.use('/person', personRoutes);
app.use('/menu', menuItemRoutes);

//for menu 



app.listen(3000, ()=>{
    console.log("listening on port 3000")
});