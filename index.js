const express=require("express");
const router=require("./routes");
const mongoose=require("./config/mongoose");






const app=express();
app.use(express.urlencoded());
const port=8000;
app.use(express.static("assets"));

app.use("/",router);





app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server Running On Port 8000");
})



