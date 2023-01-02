const express=require('express');
const cors=require('cors');
require('dotenv').config();



const app=express();
//dependencias
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT,()=>{
    console.log(`SERVIDOR CORRIENDO EN EL PUERTO ${process.env.PORT}`);
})