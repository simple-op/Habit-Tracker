const express=require("express")
const controller=require("../controllers/Home")
const controller2=require("../controllers/create");
const { Router } = require("express");



const router=express.Router();


router.get("/",controller)
router.post("/create",controller2)


module.exports=router;

