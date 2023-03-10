const Tema = require("../../models/tema");
const { agregarPreguntaExistenteATema } = require("./preguntaController");

const createTema = async (req, res) => {
    try {
        const fetchedTema = req.body;
        const createdTema = await Tema.create(fetchedTema);
        res.status(200).send({
            data: createdTema,
        });
    } catch (e) {
        console.log("Error al crear Tema: ", e);
        res.status(400).send("Error al crear Tema");
    }
};

const getTemas = async (req, res) => {
    try {
        const temas = await Tema.find().populate("preguntas", "descripcion");
        res.status(200).send({ data: temas });
    } catch (e) {
        console.log("Error al obtener lista de temas generales");
        res.status(400).send("Error al obtener lista de temas generales");
    }
};

//Obtener tema general por ID
const getTemaById = async (req, res) => {
    try {
        const temaId = req.params.id;
        const tema = await Tema.findById(temaId).populate(
            "preguntas",
            // "tema",
            // ["descripcion","orden"]
        );
        res.status(200).send(tema);
    } catch (e) {
        console.log("Error al obtener el tema");
        res.status(400).send("Error al obtener el tema");
    }
};


const agregarPreguntasATema = async (req, res) => {
    try {
        const temaId = req.params.id;
        const preguntasId = req.body.preguntas;
        for (e of preguntasId) {
            agregarPreguntaExistenteATema(temaId, e);
        }
        res.status(200).send({ data: "Preguntas agregadas" });
    } catch (e) {
        console.log("Error al agregar preguntas a tema");
        res.status(400).send("Error al agregar preguntas a tema");
    }
};

//Delete
const removeTemaById = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedTema = await Tema.findByIdAndRemove(id, {
            returnDocument: "after",
        });
        res.status(200).send({ data: deletedTema });
    } catch (e) {
        console.log("Error al eliminar tema");
        res.status(400).send("Error al eliminar tema");
    }
};



module.exports = {
    createTema,
    getTemas,
    getTemaById,
    agregarPreguntasATema,
    removeTemaById,
    
};
