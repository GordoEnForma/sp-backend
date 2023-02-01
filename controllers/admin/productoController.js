const Producto = require("../../models/producto");


//Create
const createProducto=async(req,res)=>{
    try{
        const fetchedProduct=req.body;
        const createdProduct=await Producto.create(fetchedProduct);
        res.status(200).send({
            data:createdProduct
        })
    }catch(e){
        console.log("Error al crear producto: ",e);
        res.status(400).send("Error al crear producto");
    }
}

const getProductos=async(req, res)=>{
    try{
        const Products=await Producto.find({},'-__v').populate('temas','nombre preguntas');
        res.status(200).send({data:Products});
    }catch(e){
        console.log("Error al obtener lista de productos");
        res.status(400).send("Error al obtener lista de productos");
    }
}



//Read

//Update

//agregar tema especifico a producto
const agregarTema=async(req,res)=>{
    try{
        const productoId= req.params.id;
        const temaId= req.body.temaId;

       
        const updatedProducto=await Producto.findByIdAndUpdate(productoId,
            {$push:{temas:temaId}},{returnDocument: 'after'});
        
        res.status(200).send({data:updatedProducto});
    }catch(e){
        console.log("Error al agregar un tema al producto");
        res.status(400).send("Error al agregar un tema al producto");
    }
}


//Delete

module.exports={
    createProducto,
    getProductos,
    agregarTema
}