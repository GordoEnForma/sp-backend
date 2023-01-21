const mongoose=require('mongoose');

const temaEspecificoSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    temaGeneral:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TemaGeneral'
    },
    preguntas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pregunta',
    }]
})

module.exports=mongoose.model('TemaEspecifico',temaEspecificoSchema);