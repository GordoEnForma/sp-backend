const express=require('express');
const router=express.Router();
const { createProducto, getProductos, getProductoById, agregarTemas } = require('../../controllers/admin/productoController');



router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:id')
.get(getProductoById)
.put(agregarTemas);

module.exports=router;