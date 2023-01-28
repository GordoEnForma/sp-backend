const express=require('express');
const router=express.Router();
const { createProducto, getProductos, agregarTema } = require('../../controllers/admin/productoController');



router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:id')
.put(agregarTema);

module.exports=router;