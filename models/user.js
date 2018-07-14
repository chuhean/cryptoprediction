var mongoose = require("mongoose");

//User Schema
var UserSchema  = new mongoose.Schema({
    dateCreated: {type: Date, required: true, default: Date.now},
    btcAddress: {type: String, required: true},
    vote: {type: String, required: true},
});

module.exports = mongoose.model("User", UserSchema);