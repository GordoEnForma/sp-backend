const User=require('../../models/users/user');
const Admin=require('../../models/users/admin');
const Student=require('../../models/users/student');
//Create
const createAdmin=async(req, res)=>{
    try{
        const fetchedUser=req.body;
        const createdUser=await Admin.create(fetchedUser);
        res.status(200).send({
            data:createdUser
        })

    }catch(e){
        console.log("Error al crear admin: ",e);
        res.status(400).send("Error al crear admin");
    }
}

const createStudent=async(req, res)=>{
    try{
        const fetchedUser=req.body;
        const createdUser=await Student.create(fetchedUser);
        res.status(200).send({
            data:createdUser
        })

    }catch(e){
        console.log("Error al registrar estudiante: ",e);
        res.status(400).send("Error al registrar estudiante");
    }
}
//Read
const getUsers=async(req, res)=>{
    try{
        const users=await User.find({},'-__v');
        res.status(200).send({data:users});
    }catch(e){
        console.log("Error al obtener lista de usuarios");
        res.status(400).send("Error al obtener lista de usuarios");
    }
}
const getAdminUsers=async(req, res)=>{
    try{
        const admins=await Admin.find({},'-__v');
        res.status(200).send({data:admins});
    }catch(e){
        console.log("Error al obtener la lista de administradores");
        res.status(400).send("Error al obtener la lista de administradores")
    }
}

const getStudentUsers=async(req, res)=>{
    try{
        const students=await Student.find({},'-__v');
        res.status(200).send({data:students});
    }catch(e){
        console.log("Error al obtener la lista de estudiantes");
        res.status(400).send("Error al obtener la lista de estudiantes")
    }
}
const getUserById=async(req, res)=>{
    try{
        const id=req.params.id;
        const admin=await User.findById(id,'-__v');
        res.status(200).send({data:admin});
    }catch(e){
        console.log("Error al obtener el usuario");
        res.status(400).send("Error al obtener el usuario");
    }
}
//Update

//Delete

module.exports={
    createAdmin,
    createStudent,
    getUsers,
    getAdminUsers,
    getStudentUsers,
    getUserById,
}