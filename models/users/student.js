const mongoose=require('mongoose');
const User = require('./user');

const options={discriminatorKey:'role'};
const studentSchema=User.discriminator('student',
new mongoose.Schema({
    estado:{
        type:Boolean,
        default:false,
    },
    producto:{

    }
}),options);

module.exports=studentSchema;