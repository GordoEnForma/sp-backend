const TemaEspecifico = require("../../models/temaEspecifico");

const createTemaEspecifico=async(req,res)=>{
    try{
        const TemaGeneral=req.params.id;
        const fetchedTemaEspecifico=req.body;
        const createdTemaEspecifico=await TemaEspecifico.create({
            ...fetchedTemaEspecifico,
            temaGeneral:TemaGeneral,
        });
        res.status(200).send({
            data:createdTemaEspecifico
        })
    }catch(e){
        console.log("Error al crear TemaEspecifico: ",e);
        res.status(400).send("Error al crear TemaEspecifico");
    }
}

const getTemasEspecificos=async(req, res)=>{
    try{
        
        const Temas=await TemaEspecifico.find().populate('temaGeneral','nombre');
        res.status(200).send({data:Temas});
    }catch(e){
        console.log("Error al obtener lista de Temas especificos");
        res.status(400).send("Error al obtener lista de Temas especificos");
    }
}


//Obtener preguntas de un tema específico
module.exports={
    createTemaEspecifico,
    getTemasEspecificos
}