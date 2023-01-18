const mongoose=require('mongoose');
const options={discriminatorKey:'role'};
const userSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    apellido:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    contrasena:{
        type:String,
        required:true,
    }
},options)

module.exports=mongoose.model('User',userSchema);

