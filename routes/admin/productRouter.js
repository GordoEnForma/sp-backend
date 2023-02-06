const express=require('express');
const router=express.Router();
const { createProducto, getProductos, agregarTema, getProductoById } = require('../../controllers/admin/productoController');



router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:id')
.get(getProductoById)
.put(agregarTema);

module.exports=router;