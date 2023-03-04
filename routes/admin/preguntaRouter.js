const express=require('express');
const { createPregunta, getPreguntas,getPreguntaById, eliminarPregunta } = require('../../controllers/admin/preguntaController');
const router=express.Router();

router.route('/:temaId')
.post(createPregunta)
.delete(eliminarPregunta);

router.route('/')
.get(getPreguntas);

router.route('/:id')
.get(getPreguntaById)

module.exports=router;