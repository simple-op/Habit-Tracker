
const habitsCollection=require("../models/habits");

const controller=function(req,res){
   let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
   let date=new Date();

   habitsCollection.find({},function(err,habitRow){
         
   res.render("home",{
         title:"Habit-tracker", 
         habits:habitRow,
         daysOfWeek:daysOfWeek,
         monthNames:monthNames,
         date:date,
         });});
}
module.exports=controller;
