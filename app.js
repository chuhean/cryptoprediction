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
// Development MongoDB
// mongoose.connect("mongodb://chuhean:justpredictbtc123@ds237641.mlab.com:37641/btcprediction", {useNewUrlParser: true});

var mongoPassword = 'justpredictbtc123';
			
var http = require('http');
var server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  var config = JSON.parse(process.env.APP_CONFIG);
  var MongoClient = require('mongodb').MongoClient;

  MongoClient.connect(
    "mongodb://" + config.mongo.user + ":" + encodeURIComponent(mongoPassword) + "@" + 
    config.mongo.hostString, 
    function(err, db) {
      if(!err) {
        res.end("We are connected to MongoDB");
      } else {
        res.end("Error while connecting to MongoDB");
      }
    }
  );
});

server.listen(process.env.PORT);

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
  res.status(404).send("Sorry, it seems that Satoshi doesn't understand what you want.");
});

//======================================================
//INITIATE NODEJS TO START LISTENING REQUEST
//======================================================
app.listen(process.env.IP);

