const getall=(Model)=>async(req,res) => {

    try{
      
        const respone=await Model.find().limit(10).lean().exec()

        res.status(201).send(respone)

    }
    catch(er){

        res.status(400).send(er.message);
    }

}
const block=(Model)=>async(req,res)=>{
    
    try{
        const respone=await Model.find({block:req.query.block}).lean().exec()
        
        res.status(201).send(respone)
        
    }
    catch(er){
        
        res.status(400).send(er.message)
    }
}

const getone=(Model)=>async(req,res) => {

    try{
    
        const respone=await Model.findOne({_id:req.params.id}).lean().exec()

        res.status(201).send(respone)

    }
    catch(er){

        res.status(400).send(er.message);
    }

}



const sortdsc=(Model)=>async(req,res)=>{

    try{

        // if(req.query.value==-1){

        //         const response=await Model.find().sort({flat_no:req.query.value}).limit(10).lean().exec()

        //             res.status(201).send(response)

        // }

        const respone=await Model.find().sort({flat_no:-1}).limit(10).lean().exec()
        

         res.status(201).send(respone)

    }   
    catch(er){
       res.status(400).send(er.message);
    }
}


const sortasc=(Model)=>async(req,res)=>{

    try{

        // if(req.query.value==-1){

        //         const response=await Model.find().sort({flat_no:req.query.value}).limit(10).lean().exec()

        //             res.status(201).send(response)

        // }

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

module.exports=(Model)=>{

    return {
        block:block(Model),
        getone:getone(Model),
        getall:getall(Model),
        sortasc:sortasc(Model),
        sortdsc:sortdsc(Model),
        post:post(Model),
    }

}
