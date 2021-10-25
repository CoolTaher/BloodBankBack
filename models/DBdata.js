const mongoose = require('mongoose')

var DBdata=  mongoose.model('data',{
    Name:{ type: String},
    Email:{ type: String},
    Type:{ type: String},
    Bloodgrp:{ type: String},
    Gender:{ type: String},
    Age:{type:Number},
    Phone:{ type: Number},
    flag:{type:Boolean}

});

module.exports = {DBdata};