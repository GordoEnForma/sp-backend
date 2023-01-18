const mongoose=require('mongoose');

const alternativaSchema=new mongoose.Schema({
    descripcion:{
        type:String,
        required:true,
    },
    isCorrect:{
        type:Boolean,
        default:false
    },
    pregunta:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pregunta'
    }
})

module.exports=mongoose.model('Alternativa',alternativaSchema)