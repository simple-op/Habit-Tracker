const habitsCollection=require("../models/habits");


const controller=function(req,res){
    
    habitsCollection.find({},function(err,habits){
       
       var j=0;
       for(let i in req.body){
           if(habits.length==1){
            console.log(habits.length)
   
            if(req.body[i]!=req.body.id){
            
                console.log(habits.length)
   
           
               habitsCollection.updateMany({_id:req.body.id},{status:req.body[i]},function(){
         
               })
            break;}
            
   
           }
         
   
      else{
       if(req.body[i]!=req.body.id){
           
           habitsCollection.updateMany({_id:req.body.id[j]},{status:req.body[i]},function(){
     
           })
          j++; 
         }
      }
       }
        res.redirect("/");
    })
   
}
module.exports=controller;