const express = require('express');
var router = express.Router();

var ObjectId = require('mongoose').Types.ObjectId;
var { DBmatch } = require('../models/matchDB');

// => localhost:3000/match/
router.get('/', (req, res) => {
    DBmatch.find((err, docs) => {
        if (!err) {
            res.json(docs);
        }
        else { console.log('error in retriving DBmatch') }
    });
});

router.put('/:id', (req, res) => {
    console.log(req.params.id);
    DBmatch.findById(req.params.id, function (err, doc) {
        if (!doc)
            return next(new Error('Could not load Document'));
        else {
            doc.DName = req.body.DName,
                doc.DEmail = req.body.DEmail,
                doc.DType = req.body.DType,
                doc.DBloodgrp = req.body.DBloodgrp,
                doc.DGender = req.body.DGender,
                doc.DAge = req.body.DAge,
                doc.DPhone = req.body.DPhone,

                doc.RName = req.body.RName,
                doc.REmail = req.body.REmail,
                doc.RType = req.body.RType,
                doc.RBloodgrp = req.body.RBloodgrp,
                doc.RGender = req.body.RGender,
                doc.RAge = req.body.RAge,
                doc.RPhone = req.body.RPhone,
                doc.Rflag = req.body.Rflag


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
    var drg = new DBmatch({
        DName: req.body.DName,
        DEmail: req.body.DEmail,
        DType: req.body.DType,
        DBloodgrp: req.body.DBloodgrp,
        DGender: req.body.DGender,
        DAge: req.body.DAge,
        DPhone: req.body.DPhone,

        RName: req.body.RName,
        REmail: req.body.REmail,
        RType: req.body.RType,
        RBloodgrp: req.body.RBloodgrp,
        RGender: req.body.RGender,
        RAge: req.body.RAge,
        RPhone: req.body.RPhone,
        flag: req.body.Rflag
    });
    drg.save((err, doc) => {
        if (!err) {
        }
        else { console.log('error in saving DBmatch') }
    });

    res.json({ msg: "data Added Successfully" })

});

router.delete('/:id', (req, res) => {
    DBmatch.findByIdAndDelete(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Error in Deleting") }
    })

});
module.exports = router;