const express=require("express")
const controller=require("../controllers/Home")
const controller2=require("../controllers/create");
const saveController=require("../controllers/changes")
const deleteController=require("../controllers/delete")
const { Router } = require("express");



const router=express.Router();


router.get("/",controller)
router.post("/create",controller2)
router.post("/save",saveController)
router.get("/delete",deleteController)


module.exports=router;

