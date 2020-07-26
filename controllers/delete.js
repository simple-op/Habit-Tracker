
const habitsCollection=require("../models/habits");
const controller=function(req,res){
    habitsCollection.findByIdAndDelete({_id:req.query.id},function(){

    })
     res.redirect("/");
}
module.exports=controller;


