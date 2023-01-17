const express=require('express');
const { getUsers, getAdminUsers, getUserById, getStudentUsers, createAdmin, createStudent } = require('../../controllers/admin/userController');

const router=express.Router();

//create
router.route('/register-admin')
.post(createAdmin);

router.route('/register-student')
.post(createStudent)

//read
router.route('/')
.get(getUsers);

router.route('/admin')
.get(getAdminUsers);

router.route('/student')
.get(getStudentUsers);

router.route('/:id')
.get(getUserById);
module.exports=router;