const mongoose=require('mongoose');
const DB_URI=process.env.DB_URI;
const dbConnect=()=>{
    mongoose.set('strictQuery',false);
    mongoose.connect(DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },(err,client)=>{
        if(err){
            console.log('**ERROR EN CONEXION**');
        }else{
            console.log('**CONEXION CORRECTA**');
        }
    })
}
module.exports=dbConnect;
