const express=require('express');
const { createPregunta, getPreguntas, agregarATemaEspecifico, getPreguntaById } = require('../../controllers/admin/preguntaController');
const router=express.Router();

router.route('/:temaGeneralId')
.post(createPregunta);

router.route('/')
.get(getPreguntas);

router.route('/:id')
.get(getPreguntaById)
.put(agregarATemaEspecifico);
module.exports=router;