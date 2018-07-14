//======================================================
//IMPORT MODULES
//======================================================
var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    mongoose        = require("mongoose"),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    helmet          = require("helmet"),
    compression     = require('compression');
    
//======================================================
//IMPORT MONGOOSE MODEL
//======================================================
var User            = require("./models/user");

//======================================================
//IMPORT ROUTES
//======================================================
var indexRoutes     = require("./routes/index");

//======================================================
//CONNECT APPJS TO MONGODB DATABASE
//======================================================
mongoose.connect("mongodb://chuhean:justpredictbtc123@ds237641.mlab.com:37641/btcprediction", {useNewUrlParser: true});

//======================================================
//UTILIZE IMPORTED FUNCTIONS
//======================================================
app.use(compression());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(helmet());

//======================================================
//UTILIZING ROUTES
//======================================================
app.use("/", indexRoutes);
app.use(function (req, res, next) {
  res.status(404).send("Sorry can't find that!");
});

//======================================================
//INITIATE NODEJS TO START LISTENING REQUEST
//======================================================
app.listen(process.env.PORT, process.env.IP);

