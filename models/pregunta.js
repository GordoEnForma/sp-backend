const mongoose=require('mongoose');

const opciones=['A','B','C','D','E'];
/*
alternativa={
    opcion:'A',
    descripcion:'lorem ipsum',
}

*/

const preguntaSchema=new mongoose.Schema({
    orden:{
        type:Number,
        required:true,
    },
    descripcion:{
        type:String,
        required:true,
    },
    tema:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Tema'
    },
    alternativas:[],
    opcionCorrecta:{
        type:String,
        enum:opciones,
    },
    justificacion:{
        type:String,
    },
},{timestamps:true})

//Prueba de cuentas de git
    
module.exports=mongoose.model('Pregunta',preguntaSchema)