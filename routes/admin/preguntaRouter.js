const express=require('express');
const { createPregunta, getPreguntas, agregarATemaEspecifico } = require('../../controllers/admin/preguntaController');
const router=express.Router();

router.route('/:temaGeneralId')
.post(createPregunta);

router.route('/')
.get(getPreguntas);

router.route('/:id')
.put(agregarATemaEspecifico);
module.exports=router;