const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { DBdata } = require('../models/DBdata');

// => localhost:3000/data/
router.get('/', (req, res) => {
    DBdata.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else { console.log('error in retriving DBdata') }
    });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    DBdata.findById(req.params.id, function (err, doc) {
        console.log(req.body);
        if (!doc)
            return next(new Error('Could not load Document'));
        else {
            doc.Name = req.body.Name,
                doc.Email = req.body.Email,
                doc.Type = req.body.Type,
                doc.Bloodgrp = req.body.Bloodgrp,
                doc.Gender = req.body.Gender,
                doc.Age = req.body.Age,
                doc.Phone = req.body.Phone,
                doc.flag = req.body.flag


            doc.save().then(doc => {
                res.json({ "msg": 'Update complete', data: doc });
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

router.post('/', (req, res) => {
    // console.log(req.body);
        var drg = new DBdata({
            Name: req.body.Name,
            Email: req.body.Email,
            Type: req.body.Type,
            Bloodgrp: req.body.Bloodgrp,
            Gender: req.body.Gender,
            Age: req.body.Age,
            Phone: req.body.Phone,
            flag: req.body.flag
        });
        drg.save((err, doc) => {
            if (!err) {
            }
            else { console.log('error in saving DBdata') }
        });
    
    res.json({ msg: "data Added Successfully",flag:false})

});

router.delete('/:id', (req, res) => {
    DBdata.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Error in Deleting") }
    })

});
module.exports = router;