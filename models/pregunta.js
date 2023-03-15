const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const preguntaSchema = new Schema(
    {
        orden: {
            type: String,
            required: true,
        },
        descripcion: {
            type: String,
            required: true,
        },
        alternativas: [],
        justificacion: {
            type: String,
            required: true,
        },
        tema: {
            ref: "Tema",
            type: Schema.Types.ObjectId,
        },
    },
    {
        timestamps: true,
    }
);

const Pregunta = mongoose.model("Pregunta", preguntaSchema);

module.exports = Pregunta;
