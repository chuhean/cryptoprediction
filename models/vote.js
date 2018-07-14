var mongoose = require("mongoose");

//Post Schema
var voteSchema = mongoose.Schema({
    _id: 123,
    France: Number,
    Croatia: Number
    
});

module.exports = mongoose.model("vote", voteSchema);