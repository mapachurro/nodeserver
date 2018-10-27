var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/updates_and_news",function(req,res){
  res.sendFile(path + "updates_and_news.html");
});

router.get("/oliverrenwick",function(req,res){
  res.sendFile(path + "/oliverrenwick/ORindex.html");
});

app.use(express.static(__dirname + '/'));

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("QPQ Live at Fort 3000");
});
