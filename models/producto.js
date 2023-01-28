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
})

module.exports=mongoose.model('Producto',productoSchema);