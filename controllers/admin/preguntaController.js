const Pregunta = require("../../models/pregunta");

const Tema = require("../../models/tema");
//Create
const createPregunta = async (req, res) => {
    try {
        const temaId = req.params.temaId;
        const fetchedPregunta = req.body;
        const alternativas = fetchedPregunta.alternativas.map(
            (alternativa) => ({
                descripcion: alternativa.descripcion,
                isAnswer: alternativa.isAnswer,
            })
        );
        const createdPregunta = await Pregunta.create({
            orden: fetchedPregunta.orden,
            descripcion: fetchedPregunta.descripcion,
            justificacion: fetchedPregunta.justificacion,
            alternativas: alternativas,
            tema: temaId,
        });
        await actualizarTemaPreguntaExtra(temaId, createdPregunta);

        res.status(200).send(createdPregunta);
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
        const pregunta = await Pregunta.findById(preguntaId)
            .populate
            // "tema",
            // "nombre"
            ();
        console.log(pregunta);
        res.status(200).send({ data: pregunta });
    } catch (e) {
        console.log("Error al obtener pregunta: ", e);
        res.status(400).send("Error al obtener pregunta");
    }
};

//Update

const actualizarPreguntaExistente = async (req, res) => {
    try {
        const preguntaId = req.params.id;
        const fetchedPregunta = req.body;
        const updatedPregunta = await Pregunta.findByIdAndUpdate(
            preguntaId,
            fetchedPregunta,
            { new: true }
        );
        res.status(200).send(updatedPregunta);
    } catch (e) {
        console.log("Error al actualizar pregunta: ", e);
        res.status(400).send("Error al actualizar pregunta");
    }
};

// const agregarPreguntaExistenteATema = async (temaId, preguntaId) => {
//     try {
//         const updatedPregunta = await Pregunta.findByIdAndUpdate(
//             preguntaId,
//             { tema: temaId },
//             { returnDocument: "after" }
//         );
//         const updatedTema = await actualizarTemaPreguntaExtra(
//             temaId,
//             updatedPregunta
//         );
//         return updatedTema;
//     } catch (e) {
//         console.log(
//             "Pregunta Controller: Error al agregar una pregunta a un tema: ",
//             e
//         );
//         return;
//     }
// };

const actualizarTemaPreguntaExtra = async (temaId, createdPregunta) => {
    try {
        const updatedTema = await Tema.findByIdAndUpdate(
            temaId,
            { $addToSet: { preguntas: createdPregunta } },
            { new: true }
        );

        console.log("El tema fue actualizado con éxito: ", updatedTema);
        return updatedTema;
    } catch (error) {
        console.error("Ocurrió un error al actualizar el tema: ", error);
        throw error;
    }
};

// const actualizarTemaPreguntaEliminada = async (temaId, deletedPreguntaId) => {
//     const updatedTema = await Tema.findByIdAndUpdate(
//         temaId,
//         { $pull: { preguntas: deletedPreguntaId } },
//         { returnDocument: "after" }
//     );
//     console.log("TEMA FN SECUNDARIA: ", updatedTema);
//     return updatedTema;
// };

//Delete
const eliminarPregunta = async (req, res) => {
    try {
        const temaId = req.params.temaId;
        const preguntaId = req.body.preguntaId;
        // const updatedTema = await actualizarTemaPreguntaEliminada(
        //     temaId,
        //     preguntaId
        // );
        const deletedPregunta = await Pregunta.findByIdAndRemove(preguntaId);

        res.status(200).send({
            data: deletedPregunta,
            // updatedTema,
        });
    } catch (e) {
        console.log("Error al eliminar pregunta: ", e);
        res.status(400).send("Error al eliminar pregunta");
    }
};

//DeleteQuestionsOfTheme

const eliminarPreguntasDeTema = async (req, res) => {
    try {
        const temaId = req.params.temaId;

        const result = await Pregunta.deleteMany({ tema: temaId });

        console.log(`Se eliminaron ${result.deletedCount} resultados`);

        res.status(200).send(
            "Todas las preguntas han sido eliminadas correctamente"
        );
    } catch (error) {
        console.error("Ocurrió un error al eliminar las preguntas", error);
        res.status(400).send("Error al eliminar las preguntas");
    }
};

//DeleteAllQuestions

const eliminarTodasLasPreguntas = async (req, res) => {
    try {
        const result = await Pregunta.deleteMany({});
        console.log(`Se eliminaron ${result.deletedCount} resultados`);
        res.status(200).send("Todas las preguntas han sido eliminadas");
    } catch (error) {
        console.error("Ocurrió un error al eliminar las preguntas", error);
        res.status(400).send("Error al eliminar las preguntas");
    }
};

module.exports = {
    createPregunta,
    getPreguntas,
    getPreguntaById,
    // agregarPreguntaExistenteATema,
    actualizarPreguntaExistente,
    eliminarPregunta,
    eliminarPreguntasDeTema,
    eliminarTodasLasPreguntas,
};
