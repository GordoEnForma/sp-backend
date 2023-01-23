const mongoose=require('mongoose');

const temaGeneralSchema=new mongoose.Schema({
    nombre:{
        type:String,
        required:true,
    },
    temasEspecificos:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'TemaEspecifico'
    }],
    preguntas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pregunta',
    }]
})

module.exports=mongoose.model('TemaGeneral',temaGeneralSchema);
