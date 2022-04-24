const express = require('express');

const router = express.Router();

const Flat=require('../models/flat.model')

const allcontroller=require('./allcontroller')

router.get("",async(req,res)=>{

    const page=req.query.page || 1;

    const size =req.query.size || 5;

    const offset= (page - 1) * size;

    try{
        const response=await Flat.find().populate({path:"resident_id",select:["name","age","gender"]}).skip(offset).limit(size).lean().exec()

         const totalpages=Math.ceil((await Flat.find().countDocuments())/size)
       
    //    redis.set(`IP`,JSON.stringify(req.ip))
    // console.loga(req.ip)


        

        res.send({response,totalpages})

    }
    catch(er){
        res.send(er.message)

    }
})



router.get("/sort/asc",allcontroller(Flat).sortasc)


router.get("/sort/dsc",allcontroller(Flat).sortdsc)

router.get("/block",allcontroller(Flat).block)

router.get("/type",allcontroller(Flat).type)

router.get("/:id",allcontroller(Flat).getone)

router.post("",allcontroller(Flat).post)

router.delete("/:id",allcontroller(Flat).deletedata)

module.exports =router