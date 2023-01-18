const mongoose=require('mongoose');
const productoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    temasEspecificos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TemaEspecifico'
    }]
})

module.exports=mongoose.model('Producto',productoSchema);