const express=require('express');
const cors=require('cors');
require('dotenv').config();
const dbConnect = require('./config/database');
const authRouter = require('./routes/authRouter');
const userRouter=require('./routes/admin/userRouter');
const app=express();

//Dependencias
app.use(cors());
app.use(express.json());

//Conexion a base de datos
dbConnect();

//Rutas generales
app.use('/auth',authRouter);

//Rutas de admin

app.use('/users',userRouter)

//Rutas de estudiante

app.listen(process.env.PORT,()=>{
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${process.env.PORT}`);
})