const TemaEspecifico = require("../../models/temaEspecifico");
const TemaGeneral = require("../../models/temaGeneral");

const createTemaEspecifico = async (req, res) => {
  try {
    const temaGeneralId = req.params.temaGeneralId;
    const fetchedTemaEspecifico = req.body;
    const createdTemaEspecifico = await TemaEspecifico.create({
      ...fetchedTemaEspecifico,
      temaGeneral: temaGeneralId,
    });

    const updatedTemaGeneral = await actualizarTemaGeneral(
      temaGeneralId,
      createdTemaEspecifico
    );

    res.status(200).send({
      data: createdTemaEspecifico,
      updatedTemaGeneral,
    });
  } catch (e) {
    console.log("Error al crear TemaEspecifico: ", e);
    res.status(400).send("Error al crear TemaEspecifico");
  }
};

const getTemasEspecificos = async (req, res) => {
  try {
    const Temas = await TemaEspecifico.find()
      .populate("temaGeneral", "nombre")
      .populate("preguntas", "descripcion");
    res.status(200).send({ data: Temas });
  } catch (e) {
    console.log("Error al obtener lista de Temas especificos");
    res.status(400).send("Error al obtener lista de Temas especificos");
  }
};

//Obtener tema específico por ID
const getTemaEspecificoById = async (req, res) => {
  try {
    const temaId = req.params.id;
    const tema = await TemaEspecifico.findById(temaId)
      .populate("temaGeneral", "nombre")
      .populate("preguntas", "descripcion");
    res.status(200).send({ data: tema });
  } catch (e) {
    console.log("Error al obtener el tema específico");
    res.status(400).send("Error al obtener el tema específico");
  }
};

//Update
const actualizarTemaGeneral = async (temaGeneralId, createdTemaEspecifico) => {
  const updatedTemaGeneral = await TemaGeneral.findByIdAndUpdate(
    temaGeneralId,
    { $push: { temasEspecificos: createdTemaEspecifico._id } },
    { returnDocument: "after" }
  );
  return updatedTemaGeneral;
};
//Delete

module.exports = {
  createTemaEspecifico,
  getTemasEspecificos,
  getTemaEspecificoById,
};
