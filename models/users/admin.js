const mongoose = require('mongoose');
const User=require('./user');

const options={discriminatorKey:'role'};

const adminSchema=User.discriminator('admin',
new mongoose.Schema({

}),options);

module.exports=adminSchema;