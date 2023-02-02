const mongoose=require('mongoose');
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
    },
},{
    discriminatorKey:'role',
    timestamps:true,
})

module.exports=mongoose.model('User',userSchema);

