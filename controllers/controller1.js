
const habit=require("../models/habits");

const controller=function(req,res){
     habit.create({
        habit:"abc"

     })
     res.send("sdaaasdas");
      

}
module.exports=controller;
