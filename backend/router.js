const express = require("express");
const { ObjectId } = require('mongodb'); 
const myModel = require("./schema/schema");

//lunch router
const router = express.Router();

//home route
router.get("/home", (req, res) => {

    //mongodb model
    myModel.find({}).then(function(objects) {
        res.json(objects)
    }).catch(err => console.log(err));
});

//game route
router.get("/home/:id", (req, res) => {
    const id = req.params.id;

    //fetching a single game by it's ID
    myModel.findById({_id: new ObjectId(id)}).then(function(objects) {
        res.json(objects)
    }).catch(err => console.log(err));
})

module.exports = router