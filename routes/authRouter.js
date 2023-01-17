const express=require('express');
const {  registerAdmin, loginUser } = require('../controllers/authController');
const router=express.Router();

// router.route('/register')
// .post(registerAdmin)

router.route('/login')
.post(loginUser)

module.exports=router;