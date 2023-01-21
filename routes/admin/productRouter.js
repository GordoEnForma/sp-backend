const express=require('express');
const { createProducto, getProductos } = require('../../controllers/admin/productoController');
const router=express.Router();



router.route('/')
.get(getProductos)
.post(createProducto);


module.exports=router;