const express = require('express');

const router = express.Router();

const Flat=require('../models/flat.model')

const allcontroller=require('./allcontroller')

router.get("",allcontroller(Flat).getall)

router.get("/sort",allcontroller(Flat).sort)

router.get("/block",allcontroller(Flat).block)

 router.get("",allcontroller(Flat).getone)

router.post("",allcontroller(Flat).post)

module.exports =router