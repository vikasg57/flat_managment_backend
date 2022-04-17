const express = require('express');

const router = express.Router();

const Resident=require('../models/resident.model')

const allcontroller=require('./allcontroller')

router.get("",allcontroller(Resident).getall)


 router.get("/:id",async(req,res) => {

    try{
        console.log(req.params._id)
        const response = await Resident.findOne({_id:req.params.id}).lean().exec()

        res.send(response)


    }
    catch(er){

        res.send(er.message)
    }
 })

router.post("",allcontroller(Resident).post)

module.exports = router