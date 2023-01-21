const express=require('express');
const { createTemaGeneral, getTemasGenerales } = require('../../controllers/admin/temaGeneralController');
const router=express.Router();



router.route('/')
.get(getTemasGenerales)
.post(createTemaGeneral);


module.exports=router;