const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
app.use(cors());

// DB config
const db= 'mongodb://127.0.0.1:27017/formation';
// connect to Mongo
mongoose.connect(db , { useNewUrlParser: true})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));
   

//Bodyparser
app.use(bodyParser.urlencoded({ 
        extended: true  
      }));
app.use(bodyParser.json({}));


var http = require('http');
var server = http.Server(app);



require('./routes/produits.route')(app);



const PORT = process.env.PORT || 5000;
server.listen(PORT);
