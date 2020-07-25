const express=require("express");
const router=require("./routes");
const mongoose=require("./config/mongoose");
const path=require("path");
const ejs=require("ejs");
const app=express();
const port=8000;

app.set('view engine','ejs');
app.set('views','./views');


// middlewares
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/",router);






app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server Running On Port 8000");
})



