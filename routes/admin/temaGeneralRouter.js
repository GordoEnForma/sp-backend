const express=require('express');
const { createTemaGeneral, getTemasGenerales, getTemaGeneralById } = require('../../controllers/admin/temaGeneralController');
const router=express.Router();



router.route('/')
.get(getTemasGenerales)
.post(createTemaGeneral);

router.route('/:id')
.get(getTemaGeneralById);


module.exports=router;