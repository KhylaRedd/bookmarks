const express = require('express');
//import the express

const bookmarksController = require("./controllers/bookmarkcontrollers.js");
 const petController = require("./controllers/petsController");
//import the bookmarks



const app = express();
const cors = require('cors');


//middleware
app.use(cors());
app.use(express.json());
//tells our app to accept incoming json 
app.use('/bookmarks',bookmarksController);
app.use('/pets',petController);






app.get('/', (req,res)=>{
    res.send('Welcome to the bookmarks')
});

module.exports = app;