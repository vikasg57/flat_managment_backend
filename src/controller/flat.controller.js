const express = require('express');

const router = express.Router();

const Flat=require('../models/flat.model')

const allcontroller=require('./allcontroller')

router.get("",async(req,res)=>{
    try{
        const response=await Flat.find().populate({path:"resident_id",select:["name","age","gender"]}).lean().exec()

        res.send(response)

    }
    catch(er){
        res.send(er.message)

    }
})

router.get("",allcontroller(Flat).getone)

router.get("/sort/asc",allcontroller(Flat).sortasc)


router.get("/sort/dsc",allcontroller(Flat).sortdsc)

router.get("/block",allcontroller(Flat).block)

router.post("",allcontroller(Flat).post)

module.exports =router