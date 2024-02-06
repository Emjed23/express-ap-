const mongoose=require('mongoose')

const {Schema}=mongoose

const userSchema=new Schema({
    name:{type:String,required:true},
    age:Number,
    Email:String
})

module.exports=mongoose.model('user',userSchema)