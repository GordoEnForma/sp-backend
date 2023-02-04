const express=require('express');
const {  loginUser, registerUser } = require('../controllers/authController');
const { verifyExistingUser } = require('../middlewares/verifySignUp');
const router=express.Router();

// router.route('/register')
// .post(registerAdmin)

router.route('/register')
.post(verifyExistingUser,registerUser);

router.route('/login')
.post(loginUser)

module.exports=router;