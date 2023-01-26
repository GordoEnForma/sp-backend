const TemaGeneral = require("../../models/temaGeneral");

const createTemaGeneral=async(req,res)=>{
    try{
        const fetchedTemaGeneral=req.body;
        const createdTemaGeneral=await TemaGeneral.create(fetchedTemaGeneral);
        res.status(200).send({
            data:createdTemaGeneral
        })
    }catch(e){
        console.log("Error al crear TemaGeneral: ",e);
        res.status(400).send("Error al crear TemaGeneral");
    }
}

const getTemasGenerales=async(req, res)=>{
    try{
        const temas=await TemaGeneral.find().populate('temasEspecificos','nombre').populate('preguntas','descripcion');
        res.status(200).send({data:temas});
    }catch(e){
        console.log("Error al obtener lista de temas generales");
        res.status(400).send("Error al obtener lista de temas generales");
    }
}

//Obtener tema general por ID
const getTemaGeneralById=async(req,res)=>{
    try{
        const temaId= req.params.id;
        const tema=await TemaGeneral.findById(temaId).populate('temasEspecificos','nombre').populate('preguntas','descripcion');
        res.status(200).send({data:tema});
    }catch(e){
        console.log("Error al obtener el tema general");
        res.status(400).send("Error al obtener el tema general");
    }
}


module.exports={
    createTemaGeneral,
    getTemasGenerales,
    getTemaGeneralById
}