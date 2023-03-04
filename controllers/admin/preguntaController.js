const Pregunta = require("../../models/pregunta");

const Tema = require("../../models/tema");
//Create
const createPregunta = async (req, res) => {
    try {
        const temaId = req.params.temaId;
        const fetchedPregunta = req.body;
        const createdPregunta = await Pregunta.create({
            ...fetchedPregunta,
            tema: temaId,
        });
        const updatedTema = await actualizarTemaPreguntaExtra(temaId, createdPregunta);

        res.status(200).send({
            data: createdPregunta,
            updatedTema,
        });
    } catch (e) {
        console.log("Error al crear pregunta: ", e);
        res.status(400).send("Error al crear pregunta");
    }
};
//Para usar excel
const createPreguntaCompleta = async (req, res) => {
    return;
};
//Read
const getPreguntas = async (req, res) => {
    try {
        const Preguntas = await Pregunta.find().populate("tema", "nombre");
        res.status(200).send({ data: Preguntas });
    } catch (e) {
        console.log("Error al obtener lista de preguntas: ", e);
        res.status(400).send("Error al obtener lista de preguntas");
    }
};

const getPreguntaById = async (req, res) => {
    try {
        const preguntaId = req.params.id;
        const pregunta = await Pregunta.findById(preguntaId).populate(
            "tema",
            "nombre"
        );
        res.status(200).send({ data: pregunta });
    } catch (e) {
        console.log("Error al obtener pregunta: ", e);
        res.status(400).send("Error al obtener pregunta");
    }
};

//Update

const agregarPreguntaExistenteATema = async (temaId, preguntaId) => {
    try {
        const updatedPregunta = await Pregunta.findByIdAndUpdate(
            preguntaId,
            { tema: temaId },
            { returnDocument: "after" }
        );
        const updatedTema = await actualizarTemaPreguntaExtra(temaId, updatedPregunta);
        return updatedTema;
    } catch (e) {
        console.log(
            "Pregunta Controller: Error al agregar una pregunta a un tema: ",
            e
        );
        return;
    }
};

const actualizarTemaPreguntaExtra = async (temaId, createdPregunta) => {
    const updatedTema = await Tema.findByIdAndUpdate(
        temaId,
        { $addToSet: { preguntas: createdPregunta._id } },
        { returnDocument: "after" }
    );
    console.log("TEMA: ", updatedTema);
    return updatedTema;
};

const actualizarTemaPreguntaEliminada=async(temaId,deletedPreguntaId)=>{
    const updatedTema=await Tema.findByIdAndUpdate(
        temaId,
        {$pull:{preguntas:deletedPreguntaId}},
        {returnDocument:"after"}
    );
    console.log("TEMA FN SECUNDARIA: ",updatedTema);
    return updatedTema;
}

//Delete
const eliminarPregunta= async(req,res)=>{
    try {
        const temaId = req.params.temaId;
        const preguntaId = req.body.preguntaId;
        const updatedTema = await actualizarTemaPreguntaEliminada(temaId, preguntaId);
        const deletedPregunta = await Pregunta.findByIdAndRemove(preguntaId);

        res.status(200).send({
            data: deletedPregunta,
            updatedTema,
        });
    } catch (e) {
        console.log("Error al eliminar pregunta: ", e);
        res.status(400).send("Error al eliminar pregunta");
    }
}

module.exports = {
    createPregunta,
    getPreguntas,
    getPreguntaById,
    agregarPreguntaExistenteATema,
    eliminarPregunta
};
