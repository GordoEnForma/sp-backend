const mongoose=require('mongoose');

const opciones=['A','B','C','D','E'];
/*
alternativa={
    opcion:'A',
    descripcion:'lorem ipsum',
}

*/

const preguntaSchema=new mongoose.Schema({
    descripcion:{
        type:String,
        required:true,
    },
    temas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tema'
    }],
    alternativas:[],
    opcionCorrecta:{
        type:String,
        enum:opciones,
    },
    justificacion:{
        type:String,
    }
})
module.exports=mongoose.model('Pregunta',preguntaSchema)