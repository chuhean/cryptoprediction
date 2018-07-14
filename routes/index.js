var express     = require("express");
var router      = express.Router();
var User        = require("../models/user");

//======================================================
//LANDING ROUTE
//======================================================
//show landing page
router.get("/", function(req, res){
    res.render("main"); 
});

//=========================================================
//POST ROUTE FOR MAKING PREDICTION
//=========================================================
router.post("/predict", function(req, res){
    //Create post 
    User.create(req.body, function(err, user){
        if(err || !(req.body.vote == ("Yes" || "No")) || req.body.btcAddress == ""){
            console.log(err);
        } else {
            user.save(function(err, savedPost){
                if (err){
                    console.log(err);
                } else {
                    res.send({message: "Thanks. Your prediction has been submitted!"});
                }
            });
        }
    });
});    


module.exports = router;