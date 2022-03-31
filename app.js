const express = require("express");
const bodyParser = require("body-parser");
//because not installed using npm and it's local module
//we are saying that we require module located at current directory
//locate file location
const date= require(__dirname+"/views/date.js");
console.log(date);
let items=["Study EJS and it's use","Look at GitHub","drink tea and some more tea"];
const app = express();
let workItems=[];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req,res){
let day =date();
res.render("list", {listTitle: day, newListItems: items});
});

app.post("/",function(req,res){
    let item = req.body.newItem;
  if (req.body.list==="Work List"){
    workItems.push(item);
    res.redirect("/work");
  } else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work", function(req,res){
  res.render("list",{listTitle: "Work List", newListItems:workItems });
});

app.get("/about", function(req,res){
  res.render("about");
});


app.listen(3000, function(){
  console.log("server started on port 3000");
});
