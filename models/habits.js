const mongoose=require("mongoose");


const schema=new mongoose.Schema({
    habit:{
        type:String,
        required:true
          },

    status:{
        type:Array,
           }
        });


const habit=mongoose.model("habits",schema);

module.exports=habit;
