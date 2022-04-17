const mongoose=require('mongoose')

const flatschema=new mongoose.Schema({

   image:{type:"string",require:true},
    type:{type:"string",enum: ['owner','teanant'],default:"owner"},
    block:{type:"string",require:true},
    flat_no:{type:"number",require:true,unique:true},
    resident_id:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"resident"
    }]


},{
    versionKey:false,
    timestamps:true,
})

module.exports=mongoose.model("flat",flatschema)