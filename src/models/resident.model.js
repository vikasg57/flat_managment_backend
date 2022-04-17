const mongoose=require('mongoose')

const residentschema=new mongoose.Schema({

    name:{type:"string",require:true},
    age:{type:"number",require:true},
    gender:{type:"string",require:true,default:"male"},
    


},{
    versionKey:false,
    timestamps:true,
})

module.exports=mongoose.model("resident",residentschema)