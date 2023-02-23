const mongoose = require("mongoose");

const examenSchema = new mongoose.Schema({
    estudiante: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    duracion:{
        type:Date,
    },
    preguntasResueltas:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PreguntaResuelta',
    }]
},{timestamps:true});

module.exports=mongoose.model('Examen',examenSchema);