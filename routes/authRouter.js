const express=require('express');
const {  registerAdmin } = require('../controllers/authController');
const router=express.Router();

router.route('/register')
.post(registerAdmin)
module.exports=router;