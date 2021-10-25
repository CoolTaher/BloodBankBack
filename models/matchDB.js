const mongoose = require('mongoose')

var DBmatch=  mongoose.model('match',{
    DName:{ type: String},
    RName:{ type: String},
    DEmail:{ type: String},
    REmail:{ type: String},
    DType:{ type: String},
    RType:{ type: String},
    DBloodgrp:{ type: String},
    RBloodgrp:{ type: String},
    DGender:{ type: String},
    RGender:{ type: String},
    DAge:{type:Number},
    RAge:{type:Number},
    DPhone:{ type: Number},
    RPhone:{ type: Number},
    flag:{type:Boolean}

});

module.exports = {DBmatch};