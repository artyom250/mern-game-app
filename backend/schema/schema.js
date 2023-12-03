const mongoose = require("./connect");

const mySchema = new mongoose.Schema({
    name: String,
    age: Number
});

const myModel = mongoose.model("objects", mySchema);

module.exports = myModel;