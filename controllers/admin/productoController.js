const Producto = require("../../models/producto");

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
        const Products=await Producto.find();
        res.status(200).send({data:Products});
    }catch(e){
        console.log("Error al obtener lista de productos");
        res.status(400).send("Error al obtener lista de productos");
    }
}


module.exports={
    createProducto,
    getProductos
}