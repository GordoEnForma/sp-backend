const express=require('express');
const { getUsers, getAdminUsers, getUserById, getStudentUsers, createAdmin, createStudent } = require('../../controllers/admin/userController');

const router=express.Router();

//create
router.route('/registrar-admin')
.post(createAdmin);

router.route('/registrar-estudiante')
.post(createStudent)

//read
router.route('/')
.get(getUsers);

router.route('/admin')
.get(getAdminUsers);

router.route('/estudiante')
.get(getStudentUsers);

router.route('/:id')
.get(getUserById);

module.exports=router;