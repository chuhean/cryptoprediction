var mongoose                = require("mongoose");
var passportLocalMongoose   = require("passport-local-mongoose");

//User Schema
var UserSchema  = new mongoose.Schema({
    dateCreated: {type: Date, required: true, default: Date.now},
    email: {type: String, required: true, unique: true},
    password: String,
    // France = 1, Croatia = 2
    vote: Number 
});

//Change username to email in passportLocalMongoose
UserSchema.plugin(passportLocalMongoose, {usernameField: "email"});

module.exports = mongoose.model("User", UserSchema);