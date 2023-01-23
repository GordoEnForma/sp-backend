const express=require('express');
const cors=require('cors');
require('dotenv').config();
const dbConnect = require('./config/database');
const authRouter = require('./routes/authRouter');
const userRouter=require('./routes/admin/userRouter');
const productRouter=require('./routes/admin/productRouter');
const temaGeneralRouter=require('./routes/admin/temaGeneralRouter');
const temaEspecificoRouter=require('./routes/admin/temaEspecificoRouter');
const preguntaRouter=require('./routes/admin/preguntaRouter');
const app=express();

//Dependencias
app.use(cors());
app.use(express.json());

//Conexion a base de datos
dbConnect();

//Rutas generales
app.use('/auth',authRouter);

//Rutas de admin
app.use('/usuarios',userRouter);
app.use('/productos',productRouter);
app.use('/tema-general',temaGeneralRouter);
app.use('/tema-especifico',temaEspecificoRouter);
app.use('/preguntas',preguntaRouter);

//Rutas de estudiante
app.listen(process.env.PORT,()=>{
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${process.env.PORT}`);
}) 
