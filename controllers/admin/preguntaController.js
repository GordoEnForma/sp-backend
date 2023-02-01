const Pregunta = require("../../models/pregunta");

const Tema = require("../../models/tema");
//Create
const createPregunta = async (req, res) => {
  try {
    const temaId = req.params.temaId;
    const fetchedPregunta = req.body;
    const createdPregunta = await Pregunta.create({
      ...fetchedPregunta,
      temas: [temaId],
    });
    const updatedTema = await actualizarTema(temaId, createdPregunta);
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
    const Preguntas = await Pregunta.find().populate("temas", "nombre");
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
      "temas",
      "nombre"
    );
    res.status(200).send({ data: pregunta });
  } catch (e) {
    console.log("Error al obtener pregunta: ", e);
    res.status(400).send("Error al obtener pregunta");
  }
};

//Update
const agregarATema = async (temaId, preguntaId) => {
  try {
    const updatedPregunta = await Pregunta.findByIdAndUpdate(
      preguntaId, 
      { $push: { temas: temaId }});
    const updatedTema = await actualizarTema(temaId, updatedPregunta);
    return updatedTema;
  } catch (e) {
    console.log("Pregunta Controller: Error al agregar una pregunta a un tema: ", e);
    return;
  }
};

const actualizarTema = async (temaId, createdPregunta) => {
  const updatedTema = await Tema.findByIdAndUpdate(
    temaId,
    { $push: { preguntas: createdPregunta._id } },
    { returnDocument: "after" }
  );
  return updatedTema;
};

//Delete

module.exports = {
  createPregunta,
  getPreguntas,
  getPreguntaById,
  agregarATema,
};
