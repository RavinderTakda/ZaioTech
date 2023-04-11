

const mongoose =require("mongoose")
require('dotenv').config()

const connection = mongoose.connect(process.env.MongoURL)


const ZaioSchema =new mongoose.Schema({
    id:{type:Number,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    type:{type:String,required:true},
    duration:{type:Number,required:true},
})


const ZaioModel =mongoose.model("Zaiodata",ZaioSchema)



module.exports={
    connection,
    ZaioModel
}