const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const  multipart  =  require('connect-multiparty');

var cors = require('cors');

const app = express();
app.use(cors());

// DB config
//const db= require('./config/keys').MongoURI;
// connect to Mongo
/*mongoose.connect(db , { useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false})
    .then(()=> console.log('MongoDB Connected...'))
    .catch(err=>console.log(err));*/
   // autoIncrement.initialize(db);

//Bodyparser
app.use(bodyParser.urlencoded({
    limit : '50mb',
        extended: true
        
      }));
app.use(bodyParser.json({limit: '50mb'}));


var http = require('http');
var server = http.Server(app);

app.get('/', (req, res) => {
    
    res.send("Welcome")
});





const PORT = process.env.PORT || 5000;
server.listen(PORT);
