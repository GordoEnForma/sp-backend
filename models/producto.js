const mongoose=require('mongoose');
const productoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    temas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tema'
    }]
},{timestamps:true})

module.exports=mongoose.model('Producto',productoSchema);