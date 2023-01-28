const express=require('express');
const { createPregunta, getPreguntas,getPreguntaById } = require('../../controllers/admin/preguntaController');
const router=express.Router();

router.route('/:temaId')
.post(createPregunta);

router.route('/')
.get(getPreguntas);

router.route('/:id')
.get(getPreguntaById);

module.exports=router;