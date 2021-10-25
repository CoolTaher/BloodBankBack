const express =require('express');
const bodyParser =require('body-parser');

const {mongoose}= require('./server.js')
var CURD =require('./controllers/CURD.js')
var matchCURD=require('./controllers/matchCURD')

var app= express();
app.use(bodyParser.json());
app.use('/data', CURD);
app.use('/match',matchCURD)

app.listen(3000,()=>console.log('server started at port :3000')); 
