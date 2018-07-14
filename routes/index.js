var express     = require("express");
var router      = express.Router();
var passport    = require("passport");
var User        = require("../models/user");

//======================================================
//LANDING, LOGIN, SIGN UP ROUTES
//======================================================
//show landing page
router.get("/", function(req, res){
    res.render("main"); 
});

//=========================================================
//AUTH ROUTES FOR LOGOUT
//=========================================================
//logout route
router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});

module.exports = router;