const mongoose=require('mongoose');
const User = require('./user');

const options={discriminatorKey:'role'};
const estado=['activo','pendiente']
const studentSchema=User.discriminator('student',
new mongoose.Schema({
    telefono:{
        type:String,
    },
    producto:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Producto'
    },
    estado:{
        type:String,
        enum:estado,
    }
}),options);

module.exports=studentSchema;