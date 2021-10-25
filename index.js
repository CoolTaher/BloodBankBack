const express =require('express');
const bodyParser =require('body-parser');
var cors = require('cors');
const {mongoose}= require('./server.js')
var CURD =require('./controllers/CURD.js')
var matchCURD=require('./controllers/matchCURD')

var app= express();
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept, Authorization");
    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'PUT,PATCH,POST,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

app.use(bodyParser.json());
app.use(cors());
app.use('/data', CURD);
app.use('/match',matchCURD)

app.listen(process.env.PORT || 3000,()=>console.log('server started at port :3000')); 
