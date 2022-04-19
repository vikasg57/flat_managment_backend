require("dotenv").config(); 
const Flatmanager=require('../models/authmodel')
var jwt = require('jsonwebtoken');



 const newToken=(user)=>{
    return jwt.sign({user}, "huffpost");
 }

const register =async (req, res) => {
    try{

        console.log(req.body.email)
        let user= await Flatmanager.findOne({email:req.body.email}).lean().exec();
         console.log(user)

       if(user  !== null){

          return res.status(200).send({ message: "Please try another email" });

       }
      
      
       
        user =await Flatmanager.create(req.body);
   
        const token = newToken(user);
       // console.log(token);
        res.send({user,token});

    }
    catch(err){
     return   res.send(err.message)
    }
}

const login =  async (req, res) => {
    try{
        let  user = await Flatmanager.findOne({email:req.body.email});
        if(!user) return res.send({error:"email is invalid"})
     
        const match= user.checkpassword(req.body.password);

         if(!match) return res.send({error:"Password is invalid"});
         let x=JSON.parse(JSON.stringify(user))
         const token = newToken(user)

      return   res.send({user, token});
    }
    catch(err){
       return  res.send({error:"email/password is invalid"})
    }
}


module.exports ={register,login };
