const mongoose=require('mongoose');

const preguntaSchema=new mongoose.Schema({
    descripcion:{
        type:String,
        required:true,
    },
    temaGeneral:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TemaGeneral'
    },
    temasEspecificos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TemaEspecifico'
    }],
    alternativas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Alternativa',
    }],
    justificacion:{
        type:String,
    }
})
module.exports=mongoose.model('Pregunta',preguntaSchema)