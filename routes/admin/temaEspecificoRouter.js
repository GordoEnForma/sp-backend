const express=require('express');
const { createTemaEspecifico, getTemasEspecificos } = require('../../controllers/admin/temaEspecificoController');
const router=express.Router();

router.route('/:id')
.post(createTemaEspecifico);

router.route('/')
.get(getTemasEspecificos)


module.exports=router;