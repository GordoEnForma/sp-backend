const express=require('express');
const { createTemaEspecifico, getTemasEspecificos, getTemaEspecificoById } = require('../../controllers/admin/temaEspecificoController');
const router=express.Router();

router.route('/:temaGeneralId')
.post(createTemaEspecifico);

router.route('/')
.get(getTemasEspecificos);

router.route('/:id')
.get(getTemaEspecificoById);

module.exports=router;