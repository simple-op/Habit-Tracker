// require express
const express=require("express");
// importing router from routes
const router=require("./routes");
//importing mongoose from config
const mongoose=require("./config/mongoose");
// import view engine
const ejs=require("ejs");
//calling express()
const app=express();
<<<<<<< HEAD


//on port
const port=process.env.PORT||8000;
=======
//on port
const port=8000;
>>>>>>> 63ee7d03b0985ce683af49f20f5ca6bc534fff47
// setting view
app.set('view engine','ejs');
app.set('views','./views');


// middlewares
app.use(express.urlencoded());
app.use(express.static("assets"));
app.use("/",router);





//firing up the server
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("Server Running On Port 8000");
})



