
const habitsCollection=require("../models/habits");


const controller=function(req,res){
    let newHabit=req.body.newHabit;
    let status=new Array(7);
     for(let i=0 ;i<7 ;i++){
       status[i]="";
     }
    habitsCollection.create({
        habit:newHabit,
        status:status
     })
     
     res.redirect("/");
}
module.exports=controller;


