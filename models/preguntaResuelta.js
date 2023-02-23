const mongoose = require("mongoose");

const preguntaResueltaSchema = new mongoose.Schema({
    pregunta: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pregunta",
    },
    opcionElegida:{
        type:String,
    },
    esCorrecta:{
        type:Boolean,
    },
    estudiante:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    }
});

module.exports=mongoose.model('PreguntaResuelta',preguntaResueltaSchema)
