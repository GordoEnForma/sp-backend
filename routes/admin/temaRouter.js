const express=require('express');
const { createTema, getTemas, getTemaById, agregarPreguntasATema } = require('../../controllers/admin/temaController');
const router=express.Router();



router.route('/')
.get(getTemas)
.post(createTema);

router.route('/:id')
.get(getTemaById)
.put(agregarPreguntasATema);


module.exports=router;