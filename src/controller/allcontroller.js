const { findByIdAndDelete } = require("../models/flat.model");

const getall=(Model)=>async(req,res) => {

    try{
      
        const respone=await Model.find().lean().exec()

        res.status(201).send(respone)

    }
    catch(er){

        res.status(400).send(er.message);
    }

}
const block=(Model)=>async(req,res)=>{
    
    try{
        const respone=await Model.find({block:req.query.block}).populate({path:"resident_id",select:["name","age","gender"]}).lean().exec()
        
        res.status(201).send(respone)
        
    }
    catch(er){
        
        res.status(400).send(er.message)
    }
}
const type=(Model)=>async(req,res)=>{
    
    try{
        const respone=await Model.find({type:req.query.type}).populate({path:"resident_id",select:["name","age","gender"]}).lean().exec()
        
        res.status(201).send(respone)
        
    }
    catch(er){
        
        res.status(400).send(er.message)
    }
}

const getone=(Model)=>async(req,res) => {

    try{
        console.log(req.params)
    
        const respone=await Model.findOne({_id:req.params.id}).populate({path:"resident_id",select:["name","age","gender"]}).lean().exec()

        res.status(201).send(respone)

    }
    catch(er){

        res.status(400).send(er.message);
    }

}



const sortdsc=(Model)=>async(req,res)=>{

    try{

  

        const respone=await Model.find().sort({flat_no:-1}).limit(10).lean().exec()
        

         res.status(201).send(respone)

    }   
    catch(er){
       res.status(400).send(er.message);
    }
}


const sortasc=(Model)=>async(req,res)=>{

    try{



        const respone=await Model.find().sort({flat_no:1}).limit(10).lean().exec()
        

         res.status(201).send(respone)

    }   
    catch(er){
       res.status(400).send(er.message);
    }
}

const post=(Model)=>async(req,res)=>{

    try{

        const response =await Model.create(req.body)

        res.status(200).send(response)

    }
    catch(er){
        res.status(400).send(er.message)
    }
}

const deletedata=(Model)=>async(req,res)=>{

    try{
        const response =await Model.findByIdAndDelete(req.params.id).lean().exec()

        res.status(200).send(response)
    }
     catch(er){
        res.status(400).send(er.message)
    }

}

module.exports=(Model)=>{

    return {
        block:block(Model),
        getone:getone(Model),
        getall:getall(Model),
        sortasc:sortasc(Model),
        sortdsc:sortdsc(Model),
        post:post(Model),
        type:type(Model),
        deletedata:deletedata(Model),
    }

}
