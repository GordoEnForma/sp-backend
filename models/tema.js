const mongoose=require('mongoose');

const temaGeneralSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    preguntas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pregunta',
    }]
})

module.exports=mongoose.model('Tema',temaGeneralSchema);
