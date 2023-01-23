const express=require('express');
const router=express.Router();
const { createProducto, getProductos, agregarTemaEspecífico } = require('../../controllers/admin/productoController');



router.route('/')
.get(getProductos)
.post(createProducto);

router.route('/:id')
.put(agregarTemaEspecífico);

module.exports=router;