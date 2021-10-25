const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://mrcool552:PT1234@cluster0.hncfr.mongodb.net/BloodBankDB',(err)=>{
   
    if(!err)
    console.log('Database connection succceeded....');
    else
    console.log('Error in DB connection:');
});

module.exports = mongoose;