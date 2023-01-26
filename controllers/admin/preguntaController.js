const Pregunta = require("../../models/pregunta");

const TemaGeneral = require("../../models/temaGeneral");
const TemaEspecifico = require("../../models/temaEspecifico");
//Create
const createPregunta = async (req, res) => {
  try {
    const temaGeneralId = req.params.temaGeneralId;
    const fetchedPregunta = req.body;
    const createdPregunta = await Pregunta.create({
      ...fetchedPregunta,
      temaGeneral: temaGeneralId,
    });
    console.log("PREGUNTA CREADA: ",createdPregunta);
    const updatedTemaGeneral=await actualizarTemaGeneral(temaGeneralId,createdPregunta);
    res.status(200).send({
      data: createdPregunta,
      updatedTemaGeneral,
    });
  } catch (e) {
    console.log("Error al crear pregunta: ", e);
    res.status(400).send("Error al crear pregunta");
  }
};
//Para usar excel
const createPreguntaCompleta=async(req,res)=>{
  return;
}
//Read
const getPreguntas = async (req, res) => {
  try {
    const Preguntas = await Pregunta.find().populate('temaGeneral','nombre').populate('temasEspecificos','nombre');
    res.status(200).send({ data: Preguntas })
  } catch (e) {
    console.log("Error al obtener lista de preguntas: ",e);
    res.status(400).send("Error al obtener lista de preguntas");
  }
};

const getPreguntaById = async (req, res) => {
  try {
    const preguntaId=req.params.id;
    const pregunta = await Pregunta.findById(preguntaId).populate('temaGeneral','nombre').populate('temasEspecificos','nombre');
    res.status(200).send({ data: pregunta })
  } catch (e) {
    console.log("Error al obtener pregunta: ",e);
    res.status(400).send("Error al obtener pregunta");
  }
};

//Update
const actualizarTemaGeneral=async(TemaGeneralId,createdPregunta)=>{
  const updatedTemaGeneral = await TemaGeneral.findByIdAndUpdate(
    TemaGeneralId,
    { $push: { preguntas: createdPregunta._id } },
    { returnDocument: "after" }
  );
  return updatedTemaGeneral;
}

const agregarATemaEspecifico=async(req,res)=>{
  try{

    const preguntaId=req.params.id;
    const temaEspecificoId=req.body.temaEspecificoId;
    
    const updatedtTemaEspecifico=await TemaEspecifico.findByIdAndUpdate(temaEspecificoId,{$push:{preguntas:preguntaId}},{returnDocument:'after'});
    
    const updatedPregunta=await Pregunta.findByIdAndUpdate(preguntaId,{$push:{temasEspecificos:temaEspecificoId}},{returnDocument:'after'});
    
    res.status(200).send({temaEspecifico:updatedtTemaEspecifico,pregunta:updatedPregunta});
  }catch(e){
    console.log("Error al agregar pregunta a tema específico: ",e);
    res.status(400).send("Error al agregar pregunta a tema específico");
  }
}
//-------Por analizar
const agregarATemaEspecificoPorNombre=async(temaEspecifico)=>{
  
}
//-------------------
//Delete
module.exports = {
  createPregunta,
  getPreguntas,
  getPreguntaById,
  agregarATemaEspecifico
};
