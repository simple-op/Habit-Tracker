const express=require("express")
const controller=require("../controllers/controller1")
const controller2=require("../controllers/controller2")



const router=express.Router();


router.get("/",controller)
router.get("/abc",controller2)


module.exports=router;