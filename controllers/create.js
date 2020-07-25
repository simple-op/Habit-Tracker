
const habitsCollection=require("../models/habits");


const controller=function(req,res){
    let newHabit=req.body.newHabit;
    let status=new Array(7);
    habitsCollection.create({
        habit:newHabit,
        status:status
     })
     
     res.redirect("/");
}
module.exports=controller;
