const Producto = require("../../models/producto");

//Create
const createProducto = async (req, res) => {
    try {
        const fetchedProduct = req.body;
        const createdProduct = await Producto.create(fetchedProduct);
        res.status(200).send({
            data: createdProduct,
        });
    } catch (e) {
        console.log("Error al crear producto: ", e);
        res.status(400).send("Error al crear producto");
    }
};

const getProductos = async (req, res) => {
    try {
        const Products = await Producto.find({}, "-__v").populate({
            path: "temas",
            populate: {
                path: "preguntas",
            },
        });
        res.status(200).send({ data: Products });
    } catch (e) {
        console.log("Error al obtener lista de productos");
        res.status(400).send("Error al obtener lista de productos");
    }
};

//Read
const getProductoById = async (req, res) => {
    try {
        const id = req.params.id;
        const producto = await Producto.findById(id, "-__v").populate({
            path: "temas",
            populate: {
                path: "preguntas",
            },
        });
        res.status(200).send({ data: producto });
    } catch (e) {
        console.log("Error al obtener el producto");
        res.status(400).send("Error al obtener el producto");
    }
};

//Update



const agregarTemas=async(req, res)=>{
    try {
        const productoId = req.params.id;
        const temasId = req.body.temasId;
        console.log("Temas: ",temasId);
        const updatedProducto = await Producto.findByIdAndUpdate(
            productoId,
            { $addToSet: { temas: {$each:temasId} } },
            { returnDocument: "after" }
        );

        res.status(200).send({ data: updatedProducto });
    } catch (e) {
        console.log("Error al agregar temas al producto");
        res.status(400).send("Error al agregar temas al producto");
    }
}

//Delete

module.exports = {
    createProducto,
    getProductos,
    getProductoById,
    agregarTemas
};
