const Admin=require('../models/admin');
const Student=require('../models/student');

const registerStudent=async(req,res)=>{
    try{
        const fetchedUser=req.body;
        const createdUser=await Student.create(fetchedUser);
        res.status(200).send({
            user:createdUser
        })

    }catch(e){
        console.log("Error al registrar usuario: ",e);
        res.status(400).send("Error al registrar usuario");
    }
}


const registerAdmin=async(req,res)=>{
    try{
        const fetchedUser=req.body;
        const createdUser=await Admin.create(fetchedUser);
        res.status(200).send({
            user:createdUser
        })

    }catch(e){
        console.log("Error al registrar usuario: ",e);
        res.status(400).send("Error al registrar usuario");
    }
}

module.exports={
    registerAdmin,
    registerStudent
}