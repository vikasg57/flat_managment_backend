const express = require('express');

const router = express.Router();

const Resident=require('../models/resident.model')

const allcontroller=require('./allcontroller')

router.get("",allcontroller(Resident).getall)


 router.get("",allcontroller(Resident).getone)

router.post("",allcontroller(Resident).post)

module.exports = router