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
        const Temas=await TemaGeneral.find().populate('temasEspecificos');
        res.status(200).send({data:Temas});
    }catch(e){
        console.log("Error al obtener lista de temas generales");
        res.status(400).send("Error al obtener lista de temas generales");
    }
}

//obtener preguntas de un tema general

module.exports={
    createTemaGeneral,
    getTemasGenerales
}